FROM node:latest

RUN mkdir /home/server

COPY package.json /home/server
COPY server.js /home/server

WORKDIR /home/server

RUN npm install

CMD node server

EXPOSE 3000