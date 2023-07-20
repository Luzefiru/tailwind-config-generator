FROM node:alpine AS build
WORKDIR /usr/app/src
COPY . .
RUN ["npm", "run", "build"]

FROM build AS test
ENV CI=true
RUN ["npm", "run", "test"]

FROM nginx:alpine
COPY --from=test /usr/app/src/build /usr/share/nginx/html
EXPOSE 80