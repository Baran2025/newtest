<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="Description" content="Enter your description here"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<!-- <link rel="stylesheet" href="assets/css/style.css"> -->
<title>Update</title>
</head>
<body>
<div class="container">
<div class="container">
         <div class="row">
              <div class="col-md-12">
                   <h2 class="bg-warning text-black text-center p-3 mt-5">Update Form</h2>
              </div>
         </div>
     <div class="row">
          <div class="col-md-12 mt-3">
            <form action="" method="">
              <div class="form-row">
                  <div class="col-md-12">
                      <label>Search By Id</label>
                      <input type="text"  class="form-control" name="searchid" id="validationCustom01"  placeholder="Enter your ID" required>
                  </div>
                  <input type="submit" name="btnsearch" class="btn btn-dark mt-3" value="Update Data">
                  </form>
              </div>
          </div>
     </div>
</div>
<?php
include('./connection.php');

if(isset($_REQUEST['btnsearch']))
{
    $id = $_REQUEST['searchid'];

$sqlshowquery = "SELECT * FROM `admin` WHERE ID = '$id '";
$result = mysqli_query($connect, $sqlshowquery);

if(mysqli_num_rows($result) > 0){


?>
  <div class="container">
         <div class="row">
              <div class="col-md-12">
                   <h2 class="bg-danger text-white text-center p-3 mt-5">Create-Form</h2>
              </div>
         </div>
       <div class="row mt-3">
            <div class="col-md-12">
                <form action="Allquery.php" method="post">
                    <?php
                    while($row = mysqli_fetch_assoc($result))
                    {
                    ?>
                    <div class="form-row">
                        <div class="col-md-12">
                             <label>Name</label>
                             <input type="hidden" value="<?php echo $row['ID']?>" name="id" class="form-control" >

                             <input type="text" value="<?php echo $row['Name']?>" name="stdname" class="form-control" id="validationCustom01" placeholder="Enter your Name" required>
                        </div>


                        <div class="col-md-12">
                             <label>Email</label>
                             <input type="email" value="<?php echo $row['Email']?>"  name="stdemail" class="form-control" id="validationCustom02" placeholder="Enter your Email" required>
                        </div>
                    </div>
                    <?php } ?>
                    <input type="submit" name="btnedit" class="btn btn-primary mt-3" value="Update Data">
                </form>
            </div>
       </div>
  </div>
<?php  }

else{

     echo "Record Not Found";

}


}  ?>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
</html>