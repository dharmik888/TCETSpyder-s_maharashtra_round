FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# We must build the frontend expecting the API to be at the backend's external URL, 
# or if using docker-compose, we can route it through a relative path and use nginx.
RUN npm run build

# Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
