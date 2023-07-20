FROM node:alpine
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]
