FROM python:3.9
COPY . /code/
WORKDIR /code/server/
RUN pip install -r ../requirements.txt
ENTRYPOINT ["gunicorn", "my_socket:web_server", "--bind", "0.0.0.0:8080", "--worker-class", "aiohttp.GunicornWebWorker"]
