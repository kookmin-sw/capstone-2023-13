#!/usr/bin/env bash

# move project directory
cd /home/ec2-user/capstone-2023-13

# Front Update
sudo cp -r frontend/dist /usr/share/nginx/html/

# Backend Update
sudo docker build -t backend backend/.
sudo docker rm -f backend
sudo docker run -d -p 8080:8080 --restart unless-stopped --name backend backend:latest

# Websocket Update
sudo docker build -t websocket websocket/.
sudo docker rm -f websocket
sudo docker run -d -p 8081:8080 --restart unless-stopped --name websocket websocket:latest
