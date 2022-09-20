FROM node:12-alpine as build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

EXPOSE 3001

CMD ["src/index.js"]