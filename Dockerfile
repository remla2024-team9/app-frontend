# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim

COPY . ./

# Step 4: Install dependencies
RUN npm install
# If using yarn, replace npm install with yarn install

ARG PUBLIC_URL
RUN PUBLIC_URL=$PUBLIC_URL npm run build

EXPOSE 5000

CMD ["npx",  "serve", "-s", "build"]
