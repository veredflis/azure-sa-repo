FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 2222

CMD [ "node", "server.js" ]