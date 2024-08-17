# Base image
FROM node:18-buster

# Set working directory
WORKDIR /app

# Set Expo CLI cache directory
ENV EXPO_CLI_CACHE_DIR=/root/.expo

# Install expo-cli globally
RUN npm install -g expo-cli

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Start the application
CMD ["expo", "start", "--tunnel"]
