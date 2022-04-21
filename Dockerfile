FROM node:17.3

WORKDIR /app

COPY dist /app/dist
COPY assets /app/assets
COPY .env /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Устанавливаем зависимости, в образе появится /node_modules
RUN npm ci --production

CMD node dist/server.js
