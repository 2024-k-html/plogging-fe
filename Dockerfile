FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json package-lock.json ./
RUN npm install -g expo-cli
RUN npm install

# 소스 코드 복사
COPY . .

# Expo 프로젝트 초기화
RUN expo install

# Expo 개발 서버 시작
CMD ["npm", "start", "--tunnel"]
