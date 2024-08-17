# 베이스 이미지로 node를 사용
FROM node:16

# 작업 디렉토리 설정
WORKDIR /app

# package.json 및 yarn.lock을 복사하여 종속성을 설치
COPY package.json yarn.lock ./

# Expo CLI를 글로벌하게 설치
RUN yarn global add expo-cli

# 앱 소스 코드를 복사
COPY . .

# 포트 설정 (기본적으로 Expo는 19000, 19001, 19002 포트를 사용)
EXPOSE 19000 19001 19002

# Expo 개발 서버 시작
CMD ["expo", "start", "--tunnel"]
