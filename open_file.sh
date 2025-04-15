#!/bin/bash
cd /var/www
PATH="/var/www/filesystem/"$5"/.access/"$3"/"$2
if [ -e $PATH ]; then
	ASSIGNED="menuitem"
	APATH=$PATH
else	
	ASSIGNED="none"
	APATH="/var/www/filesystem/"$5"/.access/directory"
fi
ALLOW="$(./token_verify $1 $2 $3 $ASSIGNED $5)"
echo "$ALLOW"
if [ "$ALLOW" = "1" ]; then
	GO="/var/www/filesystem/"$5
	echo $GO
	cd /bin
	./cat $APATH
	echo "_content_start_"
	./cat $GO"/"$2
fi
