#!/usr/bin/env bash

cd /home/ec2-user/capstone-2023-13

# Front Update
cp -r frontend/dist /usr/share/nginx/html/

# Backend Update
docker build -t backend backend/.
docker rm -f backend
docker run -d -p 8080:8080 --restart unless-stopped --name backend backend:latest

# Websocket Update
docker build -t websocket websocket/.
docker rm -f websocket
docker run -d -p 8081:8080 --restart unless-stopped --name websocket websocket:latest
