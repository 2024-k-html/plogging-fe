# Base image
FROM node:18-slim

# Check if yarn is already installed, if not install it
RUN npm install -g yarn

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Expose the port Expo will use (default 19000)
EXPOSE 19000

# Start the Expo server
CMD ["yarn", "start"]
