# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim AS build

WORKDIR /app

# Copy all files to the container
COPY . ./

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:alpine

# Remove the default Nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
