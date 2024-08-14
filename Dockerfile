# Node.js 이미지를 기반으로 하는 Dockerfile
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# Expo CLI 설치
RUN npm install -g expo-cli

# 앱의 package.json 및 package-lock.json 복사
COPY package*.json ./

# npm 패키지 설치
RUN npm install

# 전체 소스 코드 복사
COPY . .

# Expo를 사용하여 앱 빌드 또는 로컬 서버 실행
CMD ["expo", "start", "--tunnel"]
