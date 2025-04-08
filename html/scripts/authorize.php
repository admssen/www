<?php

$destination = $_GET["destination"];
$token = $_GET["token"];
$reply = shell_exec("bash /var/www/authorize.sh ".$destination." 2>&1");
echo $reply;

?>
