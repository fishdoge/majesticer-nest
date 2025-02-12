# 使用 Node.js 22 作為基礎映像
FROM node:22-alpine

# 設置工作目錄
WORKDIR /app

# 安裝 netcat-openbsd 用於檢查端口
RUN apk add --no-cache netcat-openbsd

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 安裝相依套件
RUN npm install

# 複製源代碼
COPY . .

# 生成 Prisma Client
RUN npx prisma generate

# 設置環境變數
ENV NODE_ENV=development

# 暴露端口
EXPOSE 3000

# 添加等待腳本
COPY wait-for.sh /wait-for.sh
RUN chmod +x /wait-for.sh

# 使用 NestJS 的開發模式啟動
CMD ["/wait-for.sh", "db:5432", "--", "sh", "-c", "npx prisma migrate dev --name init && npm run start:dev"]
# CMD ["npm", "run", "start:dev"] 