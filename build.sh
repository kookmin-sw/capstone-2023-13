#!/usr/bin/env bash

# move project directory
cd /home/ec2-user/capstone-2023-13

# Front Update
sudo cp -r frontend/dist /usr/share/nginx/html/

# 기존 컨테이너 내리고 새로운 컨테이너 실행
docker-compose down
docker-compose up -d --build
bash /home/ec2-user/remove_img.sh
