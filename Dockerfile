FROM node:16.18.1-alpine

EXPOSE 5555

WORKDIR /usr/src/prisma

COPY package*.json ./

RUN npm install -g prisma typescript ts-node

RUN npm ci

COPY . .

CMD ["prisma", "studio" ]