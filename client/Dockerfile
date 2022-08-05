FROM node:latest

WORKDIR /usr/src/hindavi

COPY package*.json ./

RUN npm install --legacy-peer-deps && npm cache clean --force

COPY . .

CMD ["npm", "run", "dev"] 
