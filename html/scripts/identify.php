<?php

$name = $_POST["name"];
$reply = shell_exec("echo i am ".$name." 2>&1");
echo $reply;

?>
