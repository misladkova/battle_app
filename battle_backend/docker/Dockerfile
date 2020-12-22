FROM mcr.microsoft.com/java/jre-headless:11-zulu-ubuntu

COPY battle_backend-1.0-SNAPSHOT.jar /opt/api-server.jar

EXPOSE 8080

CMD ["java", "-jar", "/opt/api-server.jar"]