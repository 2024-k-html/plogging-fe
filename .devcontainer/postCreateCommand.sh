#!/bin/bash
echo "Post create command 스크립트 시작..."
echo "Dev machine:"
uname -a

echo "Expo CLI 설치 중..."
npm install --save-dev -y create-expo-app@2.1.1

echo "Watchman 설치 중..."
sudo apt update
sudo apt install -y watchman
watchman --version

echo "Dev container 준비 완료!"
