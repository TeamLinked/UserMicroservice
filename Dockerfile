FROM node:10
RUN mkdir /UserMicroservice
ADD . /UserMicroservice
WORKDIR /UserMicroservice
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
