FROM node:20.11.1-alpine

WORKDIR /app/api

COPY ./package*.json ./

RUN npm i --no-cache

COPY . .

RUN npx prisma generate && npm run build

CMD npm run start:prod