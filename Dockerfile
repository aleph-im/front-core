FROM node:16-alpine as build-stage
WORKDIR /app

# Install deps
COPY [".npmrc", "package.json", "package-lock.json*", "./"]
ARG FONTAWESOME_NPM_AUTH_TOKEN
RUN npm ci

# Build app
COPY . .
RUN npm run build-storybook

# production stage
FROM nginx:1.21.3-alpine as production-stage

COPY --from=build-stage /app/storybook-static /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
