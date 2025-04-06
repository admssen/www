#!/bin/bash
SEARCH="$(ls /var/www/filesystem/subjects | grep $1)"
if [ "$SEARCH" = "$1" ]; then
	VERIFY="$(cat /var/www/filesystem/subjects/$1)"
	if [ "$VERIFY" = "$2" ]; then
		cd /var/www/filesystem/roles/
		ROLES="$(grep $1 *)"
		echo "1
${ROLES}"
	else
		echo "0"
	fi
else
	echo "0"
fi

