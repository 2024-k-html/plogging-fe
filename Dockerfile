# 안정적인 Node.js 18 LTS 버전 사용
FROM node:18

# 글로벌로 최신 ngrok 설치
RUN npm install -g ngrok @expo/ngrok

# 컨테이너 내 작업 디렉토리 설정
WORKDIR /app

# 의존성 파일만 복사하여 캐싱 최적화
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 나머지 프로젝트 파일 복사
COPY . .

# 필요한 포트 노출
EXPOSE 19000 19001 19002

# 기본 명령어로 애플리케이션 실행
CMD ["npx", "expo", "start", "--tunnel"]
