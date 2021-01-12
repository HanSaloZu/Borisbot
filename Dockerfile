FROM node:lts

WORKDIR usr/src/app/

RUN apt-get update && apt-get upgrade -y

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "start"]