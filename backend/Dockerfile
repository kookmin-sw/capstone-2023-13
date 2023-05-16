FROM eclipse-temurin:17-jdk-alpine
ENV ACCESS_KEY=${ACCESS_KEY}
ENV SECRET_KEY=${SECRET_KEY}
WORKDIR /code
COPY . /code
RUN ./gradlew build
WORKDIR /code/build/libs
ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]

