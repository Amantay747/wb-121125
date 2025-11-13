FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

COPY knexfile.ts ./
COPY src/migrations ./src/migrations
COPY src/config ./src/config

EXPOSE 8080

CMD ["npm", "run", "start"]
