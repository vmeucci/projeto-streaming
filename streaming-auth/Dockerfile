FROM alpine
RUN apk add --update nodejs
COPY . /src
WORKDIR /src
EXPOSE 3030
ENTRYPOINT ["node", "./index.js"]