# ======빌드 스테이지=======
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일 복사 및 설치
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

# Expo DevTools와 Metro Bundler에 필요한 포트 노출
EXPOSE 19000 19001 19002

RUN yarn build

# 소스 코드 복사


# ======런타임 스테이지=======
# Expo 프로젝트 초기화 (필요한 경우)
RUN yarn expo install

# Expo 개발 서버 시작
CMD ["npx", "expo", "start", "--tunnel"]
