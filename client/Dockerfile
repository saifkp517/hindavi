FROM node:latest as dependencies
WORKDIR /usr/src/hindavi
COPY package*.json ./
RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .

RUN npm run build


CMD ["npm", "run", "start"]

FROM ubuntu
COPY . /app
WORKDIR /app

ENV PORT 8000

CMD ./pocketbase serve --http=0.0.0.0:$PORT --debug
EXPOSE 8000
