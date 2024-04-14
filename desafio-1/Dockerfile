FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm i pkg -g
RUN npm i
RUN pkg package.json
# RUN rm -rf node_modules

EXPOSE 3000

CMD ["desafio-sec-linux-x64"]