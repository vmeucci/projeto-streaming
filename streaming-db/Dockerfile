FROM node:14.17.3

WORKDIR usr/src/ProjetoStreaming/streaming-db

COPY COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node","./index.js"] 