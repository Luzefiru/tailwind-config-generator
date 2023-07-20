FROM node:alpine AS build
WORKDIR /usr/src/app
COPY . .
RUN ["npm", "ci"]
RUN ["npm", "run", "build"]

FROM build AS test
ENV CI=true
RUN ["npm", "run", "test"]

FROM nginx:alpine
COPY --from=test /usr/src/app/build /usr/share/nginx/html
EXPOSE 80