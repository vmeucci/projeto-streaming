FROM alpine
RUN apk add --update nodejs
COPY . /src
WORKDIR /src
EXPOSE 8080
ENTRYPOINT ["node", "./index.js"]