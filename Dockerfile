# base image
FROM node:18.19-alpine

# root directory
WORKDIR /app

COPY package.json .

# install some dependencies
RUN yarn install

# copy other files
COPY . .

# port
EXPOSE 3000

CMD ["yarn", "dev"]