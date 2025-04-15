#!/bin/bash
cd /var/www
PATH="var/www/filesystem/roles/.access/"+$3+"/"+$2
if [ -e $PATH ]; then
	ASSIGNED="menuitem"
else	
	ASSIGNED="none"
fi
ALLOW="$(./token_verify $1 $2 $3 $ASSIGNED $5)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	cat $PATH
fi
