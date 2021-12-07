FROM alpine
RUN apk add --update nodejs
COPY . /src
WORKDIR /src
COPY package*.json ./
RUN npm install
EXPOSE 3030
ENTRYPOINT ["node", "./index.js"]