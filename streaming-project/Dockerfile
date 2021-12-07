FROM node:14.17.3

WORKDIR usr/src/ProjetoStreaming/streaming-project

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8081

CMD [ "npm", "run", "serve"] 