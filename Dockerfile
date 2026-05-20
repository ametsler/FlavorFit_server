FROM node:22 AS build
WORKDIR /usr/src/app
COPY package.json .
#COPY package-lock.json .
RUN npm install
COPY . .
RUN npx prisma generate
RUN npm run build

FROM node:22-slim
RUN apt update && apt install libssl-dev dumb-init -y --no-install-recommends
WORKDIR /usr/src/app
COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/package.json .
COPY --chown=node:node --from=build /usr/src/app/package-lock.json .
COPY --chown=node:node --from=build /usr/src/app/prisma.config.ts ./prisma.config.ts
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
RUN npm install --omit=dev

EXPOSE 4200
CMD ["dumb-init", "npm", "run", "start:migrate:prod"]
