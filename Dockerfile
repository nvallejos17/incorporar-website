FROM node

WORKDIR /usr/src/app
COPY . /usr/src/app

# Install dependencies
RUN npm install

# Build
RUN npm run build

# Start server
CMD [ "node", "server" ]