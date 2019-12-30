FROM node:8.9
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm i npm@latest -g
RUN npm i --package-lock-only
RUN npm audit fix
RUN npm install --save-dev karma@3.0.0
RUN npm install
COPY . /usr/src/app
EXPOSE 4200
CMD ["npm","start"]

