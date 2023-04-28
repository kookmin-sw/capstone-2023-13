FROM eclipse-temurin:17-jdk-alpine
WORKDIR /code
COPY . /code
RUN ./gradlew build
WORKDIR /code/build/libs
ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]

