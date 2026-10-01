# Node.js LTS Alpine image for lightweight and fast execution
FROM node:20-alpine

# Set working directory inside container
WORKDIR /app

# Copy package manifests first for efficient Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose Vite development server port
EXPOSE 5173

# Start Vite dev server with host 0.0.0.0 so it is reachable from host machine
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
