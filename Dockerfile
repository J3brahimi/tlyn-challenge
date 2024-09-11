FROM node
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 8888
CMD ["yarn", "dev"]