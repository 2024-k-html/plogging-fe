FROM node:18-alpine

ARG NODE_ENV=production 
ENV NODE_ENV=$NODE_ENV

ARG PORT=8081 
ENV PORT=$PORT
EXPOSE 8081 8082 8083 

ENV REACT_NATIVE_PACKAGER_HOSTNAME="40.82.155.26" 

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global 
ENV PATH=/home/node/.npm-global/bin:$PATH

# npm 최신 버전 설치
RUN npm install -g npm@latest

# ngrok 설치 (npm 사용)
RUN npm install -g @expo/ngrok

# /app 디렉터리 생성 및 권한 설정
RUN mkdir /app && chown root:root /app

# package.json과 package-lock.json 파일 복사
COPY package.json package-lock.json /app/

# 작업 디렉터리 설정
WORKDIR /app

# npm 패키지 설치
RUN npm install 

# 나머지 소스 코드 복사
COPY . .

# Expo 개발 서버 시작
CMD ["npx", "expo", "start"]
