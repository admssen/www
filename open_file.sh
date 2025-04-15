#!/bin/bash
cd /var/www
echo $1
echo $2
echo $3
echo $4
ALLOW="$(./token_verify $1 $2 $3 $4)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	echo
fi
