#!/bin/sh
CERT_DIR="/etc/letsencrypt/live/ualtarh.dev"
TIMEOUT=300   # Timeout de 300 secondes (5 minutes)
INTERVAL=10   # Intervalle de vérification de 10 secondes

elapsed=0

chmod 777 /etc/letsencrypt/live/ualtarh.dev

while [ ! -f "$CERT_DIR/fullchain.pem" ] || [ ! -f "$CERT_DIR/privkey.pem" ]; do
    echo "$CERT_DIR/fullchain.pem"
    echo "$CERT_DIR/privkey.pem"
    if [ $elapsed -ge $TIMEOUT ]; then
        echo "Certificat non trouvé après $TIMEOUT secondes, abandon."
        exit 1
    fi
    echo "Certificat non trouvé, réessayer dans $INTERVAL secondes..."
    sleep $INTERVAL
    elapsed=$((elapsed + INTERVAL))
done

echo "Certificat trouvé, démarrage de Nginx..."

spawn-fcgi -s /var/run/fcgiwrap.sock -M 766 /usr/bin/fcgiwrap

nginx -g 'daemon off;'
