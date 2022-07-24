FROM node:latest
WORKDIR /usr/hindavi
COPY package*.json ./
RUN npm i
COPY . .
CMD ["npm", "run", "dev"]