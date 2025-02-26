FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM --platform=$TARGETPLATFORM node:20-alpine AS runtime
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]