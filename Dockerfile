FROM node:14

RUN mkdir -p /home/app/
COPY . /home/app/
WORKDIR /home/app/

RUN npm install

ENTRYPOINT node index.js && /bin/bash

