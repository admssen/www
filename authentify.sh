#!/bin/bash
SEARCH="$(ls /var/www/filesystem/subjects | grep $1)"
if [ "$SEARCH" = "$1" ]; then
	VERIFY="$(cat $1)"
	if [ "$VERIFY" = "$2" ]; then
		echo $2
	else
		echo "0"
	fi
else
	echo "0"
fi

