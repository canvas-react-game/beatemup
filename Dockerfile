FROM node:17.3-alpine

WORKDIR /app

COPY dist /app/dist
COPY server.js /app/server.js

RUN npm i express express-rate-limit

CMD node server.js
