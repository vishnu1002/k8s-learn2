# Payment Service

FROM node:lts-bookworm-slim

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]
