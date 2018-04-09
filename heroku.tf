provider "heroku" {
}

resource "heroku_app" "default" {
  name   = "cw-nasa"
  region = "eu"
  stack  = "container"
}
