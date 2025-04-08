#!/bin/bash
cd /var/www
echo $1
echo $2
./token_verify $1 $2
