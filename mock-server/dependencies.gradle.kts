allprojects {
  repositories {
    mavenCentral()
    maven { setUrl("https://plugins.gradle.org/m2/") }
    maven { setUrl("https://kotlin.bintray.com/kotlinx") }
    maven { setUrl("http://dl.bintray.com/kotlin/kotlinx.support") }
    maven { setUrl("http://dl.bintray.com/kotlin/kotlinx") }
    maven { setUrl("http://dl.bintray.com/kotlin/kotlinx.html") }
    maven { setUrl("http://dl.bintray.com/kotlin/ktor") }
  }
}

// language
val kotlinVersion: String by project
val kotlinCoroutinesVersion: String by project

// grpc
val protobufPluginVersion: String by project
val protocVersion: String by project
val grpcVersion: String by project
val grpcOSDetectorVersion: String by project
val grpcNativeBoringVersion: String by project

// application
val ktorVersion: String by project
val shadowJarVersion: String by project

val common by extra {
  listOf(
    "org.jetbrains.kotlin:kotlin-stdlib:$kotlinVersion",
    "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlinVersion",
    "org.jetbrains.kotlin:kotlin-stdlib-jdk8:$kotlinVersion",
    "org.jetbrains.kotlinx:kotlinx-coroutines-jdk8:$kotlinCoroutinesVersion",
    "org.jetbrains.kotlinx:kotlinx-coroutines-guava:$kotlinCoroutinesVersion",
    "ch.qos.logback:logback-classic:1.2.3",
    "io.github.microutils:kotlin-logging:1.5.9"
  )
}

val grpc by extra {
  listOf(
    "io.grpc:grpc-protobuf:$grpcVersion",
    "io.grpc:grpc-stub:$grpcVersion"
  )
}
val grpcServer by extra {
  listOf(
    "io.grpc:grpc-netty:$grpcVersion",
    "io.grpc:grpc-auth:$grpcVersion"
  )
}
val grpcServerNative by extra { "io.netty:netty-tcnative-boringssl-static:$grpcNativeBoringVersion" }

val ktor by extra {
  listOf(
    "io.ktor:ktor-server-core:$ktorVersion",
    "io.ktor:ktor-locations:$ktorVersion",
    "io.ktor:ktor-html-builder:$ktorVersion",
    "io.ktor:ktor-auth:$ktorVersion",
    "io.ktor:ktor-gson:$ktorVersion",
    "io.ktor:ktor-server-netty:$ktorVersion"
  )
}
