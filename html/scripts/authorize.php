<?php

$destination = $_POST["destination"];
$token = $_POST["token"];
$reply = shell_exec("bash /var/www/authorize.sh ".$destination." 2>&1");
echo $reply;

?>
