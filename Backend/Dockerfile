FROM node:latest

RUN mkdir /home/server

COPY main.js /home/server
COPY package.json /home/server
COPY cache.js /home/server
COPY data.json /home/server
COPY multiprocess.sh /home/server

WORKDIR /home/server

RUN npm install

CMD ./multiprocess.sh

EXPOSE 3000