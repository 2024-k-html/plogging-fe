# Expo CLI를 사용하여 빌드 환경 설정
FROM node:18-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 필요한 패키지 설치
RUN apk add --no-cache bash git

# npm 최신 버전으로 업데이트 및 Expo CLI 설치
RUN npm install -g npm@latest expo-cli

# 앱의 package.json 및 package-lock.json 복사
COPY package*.json ./

# npm 패키지 설치
RUN npm install

# 전체 소스 코드 복사
COPY . .

# Expo를 사용하여 앱 빌드 또는 로컬 서버 실행
CMD ["expo", "start", "--tunnel"]
