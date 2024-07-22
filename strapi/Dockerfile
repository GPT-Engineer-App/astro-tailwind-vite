FROM strapi/base
WORKDIR /srv/app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["strapi", "develop"]