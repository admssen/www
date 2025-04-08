<?php

$destination = $_GET["destination"];
$token = $_GET["token"];
$reply = shell_exec("bash /var/www/authorize.sh ".$destination." ".$token." 2>&1");
echo $reply;

?>
