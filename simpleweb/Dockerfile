# Specifiy a base image, alpine doesnt have node configured in it 
FROM node:alpine

# specifies a working directory where things should be saved so that COPY ./ ./ (the 2nd tag saves it)
WORKDIR /usr/app

# Install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

#Default command
CMD ["npm", "start"]
