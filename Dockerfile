# # 빌드 단계
# FROM node:18-alpine as builder

# ARG NODE_ENV=production 
# ENV NODE_ENV=$NODE_ENV

# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global 
# ENV PATH=/home/node/.npm-global/bin:$PATH

# WORKDIR /app

# # package.json과 package-lock.json 파일 복사
# COPY package*.json /app/

# # npm 패키지 설치
# RUN npm install --production --no-cache && npm cache clean --force

# # 나머지 소스 코드 복사
# COPY . .

# # 여기서 빌드 작업이 있다고 가정
# # 예: RUN npm run build

# # 빌드 결과물만 남기고 나머지 파일 삭제
# RUN rm -rf node_modules src package*.json

# # 최종 실행 단계
# FROM node:18-alpine

# WORKDIR /app

# # 빌드된 파일만 복사
# COPY --from=builder /app /app

# # 환경 변수 설정
# ARG NODE_ENV=production 
# ENV NODE_ENV=$NODE_ENV

# ARG PORT=8081 
# ENV PORT=$PORT
# EXPOSE 8081 8082 8083 

# ENV REACT_NATIVE_PACKAGER_HOSTNAME="40.82.155.26" 

# CMD ["npx", "expo", "start", "--tunnel"]

FROM node:18-alpine

ARG NODE_ENV=production 
ENV NODE_ENV=$NODE_ENV

ARG PORT=8081 
ENV PORT=$PORT
EXPOSE 8081 8082 8083 

ENV REACT_NATIVE_PACKAGER_HOSTNAME="40.82.155.26" 

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global 
ENV PATH=/home/node/.npm-global/bin:$PATH

RUN apt-get -y update 
# npm 최신 버전 설치
RUN npm install -g npm@latest

# ngrok 설치 (npm 사용)
RUN npm install @expo/ngrok -y

# /app 디렉터리 생성 및 권한 설정
RUN mkdir /app && chown root:root /app

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 package-lock.json 파일 복사
COPY package*.json /app/

# npm 패키지 설치
RUN npm install 

# 나머지 소스 코드 복사
COPY . .

# Expo 개발 서버 시작
CMD ["npx", "expo", "start", "--tunnel"]
