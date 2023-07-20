FROM node:alpine
WORKDIR /usr/app/src
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
