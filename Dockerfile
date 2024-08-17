# 기본 이미지로 Node.js 18 버전 사용
FROM node:18-bullseye

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install -g expo-cli
RUN npm install

# 프로젝트 파일 복사
COPY . .

# Metro bundler를 위한 포트 노출
EXPOSE 8081

# Expo 프로젝트 시작
CMD ["npx", "expo", "start", "--tunnel"]
