<?php

$name = $_POST["name"];
$pass = $_POST["pass"];
$reply = shell_exec("bash /var/www/authentify.sh ".$name." ".$pass." 2>&1");
echo $reply;

?>
