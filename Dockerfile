FROM node:14

WORKDIR /app
COPY . ./

ARG react_app_base_url

ENV REACT_APP_BASE_URL=$react_app_base_url

RUN npm install && \
  npm run build

EXPOSE 3000
CMD ["node", "server.js"]
