FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json yarn.lock ./
RUN yarn global add expo-cli
RUN yarn install

# @expo/ngrok 패키지 설치 (프롬프트 문제 해결)
RUN yarn global add @expo/ngrok

# 소스 코드 복사
COPY . .

# Expo 프로젝트 초기화 (필요한 경우)
RUN yarn expo install

# Expo 개발 서버 시작
CMD ["yarn", "start", "--tunnel"]