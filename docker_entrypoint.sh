#! /bin/bash

if [ "$APP_ENV" = "production" ]; then
  yarn start
elif [ "$APP_ENV" = "development" ]; then

  if [ ! -d "/app/node_modules" ]; then
    yarn
  fi

  yarn dev
fi

exec "@"
