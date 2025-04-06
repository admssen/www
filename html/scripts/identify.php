<?php

$name = $_POST["name"];
identify($name);
$reply = shell_exec("ls /var/www/filesystem/subjects 2>&1");
echo $reply;

?>
