#!/bin/bash
cd /var/www
ALLOW="$(./token_verify $1 $2 $3 $4)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	echo
fi
