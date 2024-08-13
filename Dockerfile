FROM node:16-alpine

ARG NODE_ENV=production 
ENV NODE_ENV $NODE_ENV

ARG PORT=8081 
ENV PORT $PORT
EXPOSE 8081 8082 8083 

ENV REACT_NATIVE_PACKAGER_HOSTNAME= "192.168.0.73" 

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global 
ENV PATH /home/node/.npm-global/bin: $PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest 
RUN apt-get update && apt-get install -y qemu-user-static 

# 도커 컨테이너에서 터널을 시작하려면 이걸 설치해야 함
 RUN yarn add @expo/ngrok 

 RUN mkdir /app && chown root:root /app
 WORKDIR /app
 ENV PATH /app.bin: $PATH
 USER root 
 COPY package.json package-lock.json ./ 
 RUN npm install 

# 작업 디렉토리 설정
WORKDIR /app

# 소스 코드 복사
COPY . .

# Expo 개발 서버 시작
CMD [ "npx" , "expo" , "start" ]
