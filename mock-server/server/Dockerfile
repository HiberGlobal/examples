FROM openjdk:8-jre-alpine

COPY build/libs/hiber-mock-server*.jar /opt/hiber/hiber-mock-server.jar

WORKDIR /opt/hiber

# run using custom config
CMD ["java", "-server", "-Xms2g", "-Xmx2g", "-XX:+UseG1GC", "-XX:MaxGCPauseMillis=100", "-XX:+UseStringDeduplication", "-jar", "hiber-mock-server.jar"]
