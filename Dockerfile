# Base image
FROM node:18-bullseye-slim

# Set working directory
WORKDIR /app

# Install expo-cli globally
RUN npm install -g expo-cli

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port for Metro bundler
EXPOSE 19000

# Start Expo
CMD ["expo", "start", "--tunnel"]
