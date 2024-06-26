FROM sound_sunny_dependencies
ARG ENV_FILE
ENV ENV_FILE=$ENV_FILE

WORKDIR /projects/web/sound-sunny

COPY . /projects/web/sound-sunny
COPY $ENV_FILE /projects/web/sound-sunny/.env
RUN yarn build
