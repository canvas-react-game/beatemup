FROM node:17.3

WORKDIR /app

# Копируем билд
COPY dist /app/dist
# Копируем favicon.ico
COPY assets/favicon.ico /app/dist
# Копируем env файл
COPY .env /app/dist
# Копируем package.json для установки зависимостей
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm ci --production

# Запускаем сервак
CMD node dist/server.js
