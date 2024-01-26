# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the project
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
