val kotlinVersion: String by settings
val grpcOSDetectorVersion: String by settings
val protobufPluginVersion: String by settings
val shadowJarVersion: String by settings

/**
 * Version and dependency management for plugins. Sets a version from gradle.properties for an imported plugin.
 */
pluginManagement {
  repositories {
    mavenCentral()
    gradlePluginPortal()
    jcenter()
    maven(url = "https://kotlin.bintray.com/kotlinx")
  }

  resolutionStrategy {
    eachPlugin {
      when (requested.id.toString()) {
        "org.jetbrains.kotlin.jvm" -> useVersion(kotlinVersion)
        "kotlin-multiplatform" -> useModule("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
        "com.google.protobuf" -> useVersion(protobufPluginVersion)
        "com.google.osdetector" -> useModule("com.google.gradle:osdetector-gradle-plugin:$grpcOSDetectorVersion")
        "com.github.johnrengelman.shadow" -> useVersion(shadowJarVersion)
      }
    }
  }
}

include(
  "api",
  "api:proto",
  "server"
)
