#!/bin/bash

# Build frontend and backend
npm run build

# Create necessary directories
mkdir -p .vercel/output/functions

# Copy static files to output
mkdir -p .vercel/output/static
cp -r dist/public/* .vercel/output/static/

# Move API to Vercel function
cp -r api .vercel/output/functions/

# Ensure we have a config.json
echo '{
  "version": 3,
  "routes": [
    { "src": "/api/(.*)", "dest": "/api" },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}' > .vercel/output/config.json

echo "Build completed for Vercel deployment"