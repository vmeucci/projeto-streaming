FROM node:14.17.3
COPY . /src
WORKDIR /src
COPY package*.json ./
RUN npm install
EXPOSE 8081
ENTRYPOINT ["npm", "run", "serve"]