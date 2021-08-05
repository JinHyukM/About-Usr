FROM node:latest

WORKDIR /

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]