<?php

$destination = $_POST["destination"];
$token = $_POST["token"];
$action = $_POST["action"];
$itype = $_POST["itype"];
$reply = shell_exec("bash /var/www/authorize.sh ".$token." ".$destination." ".$action." ".$itype." 2>&1");
echo $reply;

?>
