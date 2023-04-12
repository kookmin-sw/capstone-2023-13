FROM adoptopenjdk/openjdk11
COPY . /code/
WORKDIR /code
RUN ./gradlew build
RUN cd build/libs
