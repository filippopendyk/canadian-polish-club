# Use official Node images
FROM node:18-alpine

WORKDIR /app

# Copy package files & install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the Strapi project
COPY . .

EXPOSE 1337

CMD ["npm", "start"]