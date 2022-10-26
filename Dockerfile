FROM docker.io/node:16-alpine

COPY . .

CMD ["app.js"]
