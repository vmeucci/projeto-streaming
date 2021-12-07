FROM node:14.17.3

WORKDIR usr/src/ProjetoStreaming/streaming-auth

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD [ "node","./index.js"] 