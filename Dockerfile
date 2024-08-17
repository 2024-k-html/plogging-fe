# Node.js 18 사용
FROM node:18-alpine

WORKDIR /app

# CI 환경 변수 설정
ENV CI=1

# 패키지 설치
COPY package.json yarn.lock ./
RUN yarn install
RUN yarn global add @expo/ngrok

# 앱 소스 코드 복사
COPY . .

# Expo 프로젝트 시작
CMD ["npx", "expo", "start", "--no-interactive"]
