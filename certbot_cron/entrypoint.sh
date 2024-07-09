#!/bin/sh

crond -f &
exec "$@"