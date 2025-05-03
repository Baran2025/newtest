<?php
session_start();
include('./connection.php');
if(!isset($_SESSION["ID"]))
{

   header("location:login.php");

}else{

    $id = $_SESSION['ID'];
    $sqlquery = "SELECT * FROM `tbl_user` WHERE ID = '$id'";
    $result = mysqli_query($connect, $sqlquery);
    $data = mysqli_fetch_assoc($result);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome To Home Page: <?php
    if($_SESSION["ID"])
    {
        echo $data['Name'];
    }
    ?></h1>

    <a href="logout.php">Logout</a>
    
</body>
</html>