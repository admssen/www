<?php

$destination = $_POST["destination"];
$token = $_POST["token"];
$action = $_POST["action"];
$itype = $_POST["itype"];
$parent = $_POST["parent"];
$reply = shell_exec("bash /var/www/open_file.sh ".$token." ".$destination." ".$action." ".$itype." ".$parent." 2>&1");
echo $reply;

?>
