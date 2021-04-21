FROM node:14-alpine

COPY . .

RUN npm i -g yarn --force
RUN yarn --force
