FROM node:8

# Si queremos, podemos instalar angular cli 
# (aunque no lo recomiendo debido a que será la misma versión para todos los proyectos y esto no nos interesa)
# podemos instalar con Yarn o con NPM (yo utilizo el segundo)
#RUN yarn global add @angular/cli@latest


WORKDIR /app
COPY package.json /app
#COPY yarn.lock /app
#RUN yarn install --pure-lockfile
RUN npm install
COPY . /app

# corremos la aplicación de angular
CMD ng serve --host 0.0.0.0 --disable-host-check --proxy-config proxy.conf.dev.json
EXPOSE 4200
