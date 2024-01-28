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

# Set a placeholder DATABASE_URL for the build (replace with your actual connection details)
ENV DATABASE_URL="postgresql://root:root@db:5431/test_db"

# Run Prisma migrations during the build
RUN npx prisma db push

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
