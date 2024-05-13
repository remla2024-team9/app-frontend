# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory
WORKDIR /src

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# If using yarn, uncomment the next line
# COPY yarn.lock ./

# Step 4: Install dependencies
RUN npm install
# If using yarn, replace npm install with yarn install

# Step 5: Bundle app source inside Docker image
COPY . .

# Step 8: Define environment variable for port
ENV PORT 3000

# Step 9: Expose port 3000 to the outside once the container is launched
EXPOSE 3000

# Step 10: Run the app using serve
CMD ["npm", "start"]
