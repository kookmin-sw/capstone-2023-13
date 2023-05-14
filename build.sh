#!/usr/bin/env bash

# move project directory
cd /home/ec2-user/capstone-2023-13

# Front Update
sudo cp -r frontend/dist /usr/share/nginx/html/

# 기존 컨테이너 내리고 새로운 컨테이너 실행
docker-compose down
if [ $? -eq 0 ];then
	echo "docker-compose down success"
else
	echo "docker-compose down fail"
fi

docker-compose up -d --build
if [ $? -eq 0 ];then
	echo "docker-compose up success"
else
	echo "rollback"
	docker run -d -p 8080:8080 --name backend --restart unless-stopped capstone-2023-13_backend
	docker run -d -p 8081:8080 --name websocket --restart unless-stopped capstone-2023-13_websocket
	bash ../remove_img.sh
fi
