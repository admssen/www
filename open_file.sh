#!/bin/bash
cd /var/www
PATH="var/www/filesystem/.access/"+$3+"/"+$2
if [ -e $PATH]; then
	echo "yes"
	ASSIGNED="menuitem"
else	
	echo "no"
	ASSIGNED="none"
fi
ALLOW="$(./token_verify $1 $2 $3 $ASSIGNED)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	echo "yes"
fi
