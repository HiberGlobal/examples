FROM openjdk:8-jre-alpine

ARG VERSION=""

COPY build/libs/hiber-mock-server-${VERSION}-all.jar /opt/hiber/hiber-mock-server.jar

WORKDIR /opt/hiber

EXPOSE 9090

# run using custom config
CMD ["java", "-server", "-Xms2g", "-Xmx2g", "-XX:+UseG1GC", "-XX:MaxGCPauseMillis=100", "-XX:+UseStringDeduplication", "-jar", "hiber-mock-server.jar"]
