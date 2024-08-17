# Base image
FROM node:18-slim

# Install Yarn globally
RUN if ! command -v yarn >/dev/null 2>&1; then npm install -g yarn; fi

# Install @expo/ngrok globally
RUN yarn global add @expo/ngrok

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

# Start the Expo server using npx
CMD ["npx", "expo", "start", "--non-interactive", "--tunnel=false"]
