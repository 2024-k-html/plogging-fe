FROM node:18-alpine

ARG NODE_ENV=production 
ENV NODE_ENV=$NODE_ENV

ARG PORT=8081 
ENV PORT=$PORT
EXPOSE 8081 8082 8083 

ENV REACT_NATIVE_PACKAGER_HOSTNAME="40.82.155.26" 

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global 
ENV PATH=/home/node/.npm-global/bin:$PATH

# 필요한 경우 bash와 기타 의존성 설치
RUN apk add --no-cache bash

# npm 최신 버전으로 업데이트
RUN npm install -g npm@latest

# @expo/ngrok를 전역 설치하여 CommandError 방지
RUN npm install -g @expo/ngrok@4.1.0

# /app 디렉터리 생성 및 node 사용자에게 소유권 설정
RUN mkdir /app && chown -R node:node /app

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 package-lock.json 먼저 복사하여 Docker 캐시 활용
COPY --chown=node:node package*.json ./

# npm 패키지 설치
RUN npm install

# 나머지 소스 코드 복사
COPY --chown=node:node . .

# 루트가 아닌 'node' 사용자로 실행
USER node

# Expo 개발 서버 시작
CMD ["npx", "expo", "start", "--tunnel", "--non-interactive"]
