<?php

$name = $_POST["name"];
identify($name);
$reply = shell_exec("bash identify.sh" . $name . "2>&1");
echo $reply;

?>
