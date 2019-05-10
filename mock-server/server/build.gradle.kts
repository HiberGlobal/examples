import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar

plugins {
  id("com.github.johnrengelman.shadow")
  id("application")
}

application {
  mainClassName = "global.hiber.mockserver.ServerKt"
}

dependencies {
  compile(project(":api"))
}

tasks.withType<ShadowJar> {
  append("reference.conf")
  manifest {
    attributes(
      "Implementation-Title" to "Hiber Server",
      "Implementation-Vendor" to "Hiber",
      "Implementation-Version" to rootProject.version
    )
  }
  baseName = "hiber-mock-server"
  version = "${rootProject.version}"
}

tasks.withType<Test> {
  setForkEvery(1)
}
