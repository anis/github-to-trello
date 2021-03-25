FROM node:15.12-alpine AS development

RUN mkdir /home/node/app/ && chown node:node /home/node/app/

USER node

WORKDIR /home/node/app/

COPY --chown=node:node package.json ./
RUN yarn install --silent && yarn cache clean


FROM node:15.12-alpine AS production

RUN mkdir /home/node/app/ && chown node:node /home/node/app/

USER node

WORKDIR /home/node/app/

COPY --from=development --chown=root:root /home/node/app/node_modules ./node_modules
COPY . .

ENTRYPOINT ["yarn", "start"]