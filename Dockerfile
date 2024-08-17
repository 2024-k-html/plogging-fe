# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Install expo-cli globally
RUN npm install -g expo-cli

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Start the application
CMD ["expo", "start", "--tunnel"]
