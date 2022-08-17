FROM node:latest as dependencies
WORKDIR /usr/src/hindavi
COPY package*.json ./
RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .

RUN npm run build


CMD ["npm", "run", "start"]
