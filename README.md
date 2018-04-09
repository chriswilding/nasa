# NASA Image and Video Library Viewer [![Build Status](https://travis-ci.org/ChrisWilding/nasa.svg?branch=master)](https://travis-ci.org/ChrisWilding/nasa)

A demo React app using the NASA image and video library API. 

You can try it out [here](https://cw-nasa.herokuapp.com/search).

## Prerequisites

1. [Node v8.11.1](https://nodejs.org/en/download/)
1. [Yarn](https://yarnpkg.com/en/docs/install)

## Installation

```sh
$ git clone git@github.com:ChrisWilding/nasa.git
$ cd nasa
$ yarn install

```

## Usage

```sh
$ yarn start
yarn run v1.5.1
$ webpack-dev-server
Project is running at http://localhost:8080/
...
```

# Docker

### Prerequisites

1. [Docker](https://www.docker.com/community-edition)

### Usage

```sh
$ docker build -t nasa .
$ docker run --name nasa -d -p 8080:80 -e PORT=80 nasa
```

Project is running at http://localhost:8080/
