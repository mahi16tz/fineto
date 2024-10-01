#!/bin/bash

# Exit the script if any command fails
set -e

# Print each command before executing (for debugging)
set -x

# Build the React application
npm run build

# Deploy the build folder to GitHub Pages (if applicable)
# This assumes you have gh-pages set up and a repository linked
git add .
git commit -m "Deploying the application"
git push origin main

# If using GitHub Pages, uncomment the following line:
# npm install -g gh-pages && npm run deploy

echo "Deployment complete!"
