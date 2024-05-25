# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim

COPY . ./

# Step 4: Install dependencies
RUN npm install
# If using yarn, replace npm install with yarn install

RUN npm run build

EXPOSE 3000

RUN npm install -g serve

CMD ["serve", "-s", "build"]