#!/bin/bash
cd /var/www
if [! -f "var/www/filesystem/.access/"+$3+"/"+$2]
then
	echo "no"
	ASSIGNED="none"
else	
	echo "yes"
	ASSIGNED="menuitem"
fi
ALLOW="$(./token_verify $1 $2 $3 $ASSIGNED)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	echo "yes"
fi
