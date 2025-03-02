# Use official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Start the application
CMD ["node", "server.js"]