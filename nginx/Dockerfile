FROM nginx:1-alpine

RUN apk add --no-cache spawn-fcgi fcgiwrap

COPY ./wait-for-cert.sh /wait-for-cert.sh
RUN chmod +x /wait-for-cert.sh

COPY ./reload_nginx.sh /reload_nginx.sh
RUN chmod +x /reload_nginx.sh

COPY ./default.conf /etc/nginx/conf.d/

