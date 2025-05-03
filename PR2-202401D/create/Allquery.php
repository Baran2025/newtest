<?php

include('./connection.php');

if(isset($_REQUEST['savebtn'])){
 
$id  =    $_REQUEST['id'];
$name  =    $_REQUEST['stdname'];
$email  =    $_REQUEST['stdemail'];

$sqlsavequery = "INSERT INTO `student`(`ID`, `Name`, `Email`) VALUES ('$id','$name','$email')";

$result = mysqli_query($connect, $sqlsavequery);
mysqli_close($connect);



}


?>