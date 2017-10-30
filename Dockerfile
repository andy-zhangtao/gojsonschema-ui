FROM node:6

RUN npm install http-server -g
COPY dist /night

ENTRYPOINT ["http-server","/night"]
