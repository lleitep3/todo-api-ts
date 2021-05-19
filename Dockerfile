FROM node:slim

ARG PORT
ARG APP_ENV

ENV PORT ${PORT}
ENV APP_ENV ${APP_ENV}

WORKDIR /app

ADD ./app /app

RUN yarn && yarn build

ADD ./docker_entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
