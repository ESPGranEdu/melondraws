# Vite App prod build
FROM node:latest AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN apt-get update && apt-get upgrade -y
COPY . ./
RUN npm install && npm run build

# Nginx Web Server
FROM nginx:latest
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/

