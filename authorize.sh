#!/bin/bash
cd /var/www
ALLOW="$(./token_verify $1 $2)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	cd /var/www/filesystem/$2
	pwd
	ls -D
fi
