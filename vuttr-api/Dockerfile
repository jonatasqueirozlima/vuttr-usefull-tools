FROM node:16-alpine

WORKDIR /dbjson

COPY ./ ./

RUN npm install --loglevel verbose

CMD [ "npm", "start"]