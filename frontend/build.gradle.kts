plugins {
    id("com.github.node-gradle.node") version "7.0.1"
}

node {
    download = true
    version = "20.10.0"
}

tasks.register<com.github.gradle.node.npm.task.NpmTask>("build") {
    dependsOn("npmInstall")
    args = listOf("run", "build")
}

tasks.register<com.github.gradle.node.npm.task.NpmTask>("start") {
    dependsOn("npmInstall")
    args = listOf("start")
}

tasks.register<com.github.gradle.node.npm.task.NpmTask>("test") {
    dependsOn("npmInstall")
    args = listOf("run", "test")
}
