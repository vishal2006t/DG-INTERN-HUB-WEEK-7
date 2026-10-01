# Node 22 Alpine lightweight base image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package manifests first for optimal Docker layer caching
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose Vite development server port
EXPOSE 5173

# Start Vite dev server bound to 0.0.0.0 so it is reachable from host machine
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
