#!/bin/bash
SEARCH="$(ls /var/www/filesystem/subjects | grep $1)"
if [ "$SEARCH" = "$1" ]; then
	echo "1"
else
	echo "0"
fi

