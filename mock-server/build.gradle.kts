@file:Suppress("UNUSED_VARIABLE", "unused")

import org.jetbrains.kotlin.gradle.plugin.KotlinSourceSet
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

/* The dependencies are managed in dependencies.gradle.kts */
apply(from = "dependencies.gradle.kts")

plugins {
  id("org.jetbrains.kotlin.jvm")
  id("com.google.protobuf")
  idea
}

val applicationVersion: String by project
val javaTarget: String by project
val common: List<String> by extra

group = "global.hiber"
version = applicationVersion

/* The proto modules are detected if they are in the settings.gradle.kts, and protobuf building is enabled on them. */
val protoModules: List<Project> = subprojects.filter { it.path.endsWith(":proto") }

/* A specified list of modules that is configured as GRPC Server. This handles most of the complicated configuration. */
val grpcServerModulePaths = setOf(
  ":api"
)


/* Kotlin build basics: Configures the directory structure, basic plugins and dependencies. */
configure(subprojects) {
  plugins.apply("org.jetbrains.kotlin.jvm")

  dependencies {
    common.forEach { implementation(it) }
  }

  // make the 'src' directory the kotlin source folder
  // and the 'resources' directory the resources directory, instead of src/main/...
  sourceSets["main"]
    .java { srcDir("src") }
    .resources { srcDir("resources") }
    .withConvention(KotlinSourceSet::class) {
      kotlin.srcDir("src")
    }

  java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
  }

  // set additional kotlin options, like treating warnings as errors
  tasks.withType<KotlinCompile>().configureEach {
    kotlinOptions {
      jvmTarget = javaTarget
      allWarningsAsErrors = true
      freeCompilerArgs = freeCompilerArgs + "-Xuse-experimental=kotlinx.coroutines.ObsoleteCoroutinesApi"
    }
  }

  apply(from = "${rootProject.projectDir}/idea.gradle")
}

/* The proto modules are configured to build their protobuf files. */
configure(protoModules) {
  plugins.apply("com.google.protobuf")
  plugins.apply("idea")

  // simple proto linting
  tasks.register<Exec>("protoLint") {
    commandLine("sh", "-c", """! grep "\w*[a-z][A-Z]\w*\s=\s*[0-9]" *.proto""")
  }

  // make sure generateProto is executed
  tasks.withType<KotlinCompile>().configureEach {
    dependsOn("protoLint")
    dependsOn("generateProto")
  }

  // add the generated code to source directories
  sourceSets["main"].java {
    srcDirs(
      "$projectDir/build/generated/source/proto/main/java",
      "$projectDir/build/generated/source/proto/main/grpc"
    )
  }

  val grpc: List<String> by rootProject.extra

  dependencies {
    grpc.forEach { compile(it) }
  }

  // TODO(CFD-854) proto is still problematic, so I've used a gradle groovy file for it
  // monitor https://github.com/google/protobuf-gradle-plugin/issues/222
  apply(from = "${rootProject.projectDir}/proto.gradle")
}


/* A specified list of modules is configured as GRPC API Server. This handles most of the complicated configuration. */
configure(subprojects.filter { it.path in grpcServerModulePaths }) {
  plugins.apply("com.google.osdetector")

  val grpcServer: List<String> by rootProject.extra
  val grpcServerNative: String by rootProject.extra

  dependencies {
    grpcServer.forEach { implementation(it) }

    // force linux when building docker image
    val osClassifier = if (isDockerBuild) dockerOSClassifier else osdetector.classifier
    implementation("$grpcServerNative:$osClassifier")
  }
}


//-----------------------------------------------------------------------------
// Docker build settings: Block dist tasks when not building docker image
val Project.dockerOSClassifier get() = "linux-x86_64"
val Project.isDockerBuild: Boolean get() = hasProperty("dockerizeServer")

val dockerTasks = setOf("shadowJar", "distZip", "distJar")
gradle.taskGraph.beforeTask {
  if (name in dockerTasks) {
    enabled = isDockerBuild
  }
}


//-----------------------------------------------------------------------------
// gradle wrapper task
tasks.withType<Wrapper> {
  gradleVersion = "4.10.3"
}
