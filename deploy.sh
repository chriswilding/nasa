#!/bin/sh -e
docker build -t cw-nasa .;
echo "$DOCKER_PASSWORD" | docker login --username=_ --password-stdin registry.heroku.com;
docker tag cw-nasa registry.heroku.com/cw-nasa/web;
docker push registry.heroku.com/cw-nasa/web;
