FROM node:17.3-alpine

WORKDIR /app

COPY . .

RUN npm i

CMD npm start