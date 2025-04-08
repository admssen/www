#!/bin/bash
cd /var/www
./token_verify $1 $2
cd /var/www/filesystem/$2
ls
