FROM python:3.9
COPY . /app/
WORKDIR /app/
RUN pip install -r requirements.txt
RUN pytest --asyncio-mode=auto test/test.py
ENTRYPOINT ["gunicorn", "server.main:web_server", "--bind", "0.0.0.0:8080", "--worker-class", "aiohttp.GunicornWebWorker"]
