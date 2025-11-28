FROM node:14-alpine
WORKDIR /contact-manager-app/src/app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

