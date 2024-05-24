# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim

COPY . ./

# Step 4: Install dependencies
RUN npm install
# If using yarn, replace npm install with yarn install

RUN npm run build

# Step 8: Define environment variable for port
ENV PORT 3000

# Step 9: Expose port 3000 to the outside once the container is launched
EXPOSE 3000

# Step 10: Run the app using serve
CMD ["npm", "start"]
