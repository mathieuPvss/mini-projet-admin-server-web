FROM certbot/dns-cloudflare

RUN apk add --no-cache curl 

COPY ./prevent_reload_nginx.sh /prevent_reload_nginx.sh
RUN chmod +x /prevent_reload_nginx.sh

COPY ./root /etc/crontabs/root

COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["tail", "-f", "/dev/null"]