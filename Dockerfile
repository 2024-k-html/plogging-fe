FROM node:14.13.1-buster-slim

# Node.js 환경 설정 (개발 또는 프로덕션)
# 기본값은 production이며, compose 파일에서 빌드 및 실행 시 development로 재정의됨
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Node.js 기본 포트와 디버그를 위한 포트 설정
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# 전역 패키지 설치
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# 로컬 개발을 위한 앱 바인드 마운팅을 쉽게 하기 위해 먼저 의존성 설치
# 기본 /opt 디렉토리 권한 문제로 루트 권한으로 디렉토리를 생성하고 권한을 변경함
RUN mkdir /opt/react_native_app
WORKDIR /opt/react_native_app
ENV PATH /opt/react_native_app/.bin:$PATH
COPY ./react_native_app/package.json ./react_native_app/package-lock.json ./
RUN npm install

# 소스 코드를 마지막에 복사함 (가장 자주 변경되기 때문)
WORKDIR /opt/react_native_app/app
# 개발 환경에서는 볼륨을 바인드 마운트; 프로덕션에서는 주석 처리
COPY ./react_native_app .

# npm run 명령어를 기본 엔트리포인트로 설정
ENTRYPOINT ["npm", "run"]
# 기본적으로 "start" 명령어 실행 (npm run start와 동일)
CMD ["start"]
