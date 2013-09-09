<?php
if(isset($_REQUEST['metodo'])) $dir = "include/".$_REQUEST['metodo'].".php";
else $dir = "include/index.php";
include ($dir);
?>
