# Use the official Node.js image as the base image
FROM node

# Set the working directory in the container
WORKDIR /usr/src/app



# Copy all files to the working directory
COPY . .


# Install project dependencies
RUN npm install

# Build the project
RUN npm run build

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
