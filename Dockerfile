# Step 1: Use an official Node.js runtime as a parent image
FROM node:21-bullseye-slim

# Set build-time environment variables
ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=${REACT_APP_BACKEND_URL}

# Copy all files to the container
COPY . ./

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Install serve to serve the React app
RUN npm install -g serve

# Command to run the app
CMD ["serve", "-s", "build"]
