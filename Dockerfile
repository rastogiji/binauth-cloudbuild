FROM marketplace.gcr.io/google/nodejs:latest
COPY index.js package.json package-lock.json my-app/
WORKDIR my-app/
RUN npm install
ENTRYPOINT ["npm" ,"start"]