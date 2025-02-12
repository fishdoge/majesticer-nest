#!/bin/sh
# wait-for.sh

set -e

HOSTNAME=$(echo "$1" | cut -d ":" -f1)
PORT=$(echo "$1" | cut -d ":" -f2)
shift
cmd="$@"

until nc -z "$HOSTNAME" "$PORT"; do
  echo "waiting for $HOSTNAME:$PORT..."
  sleep 1
done

echo "$HOSTNAME:$PORT is up - executing command"
exec $cmd 