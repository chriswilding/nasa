FROM node:8.11.1
RUN apt-get update && \
  apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && \
  apt-get install yarn
RUN mkdir -p "/app"
WORKDIR "/app"
ADD . .
RUN yarn install --force && \
  yarn run build

FROM nginx:1.13.11-alpine
COPY --from=0 /app/dist /usr/share/nginx/html
