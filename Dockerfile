# Multi-stage build for Cloud Run
# Stage 1: Build Vite + React application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with high-performance Nginx
FROM nginx:alpine

# Remove default nginx configurations
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Default Cloud Run port
EXPOSE 8080

# Adapt dynamically to Cloud Run $PORT environment variable
CMD ["/bin/sh", "-c", "sed -i 's/listen [0-9]*/listen '\"${PORT:-8080}\"'/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
