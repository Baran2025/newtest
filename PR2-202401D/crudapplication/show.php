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
<title>Show</title>
</head>
<body>
<?php
    
    include('./connection.php');

    $sqluery = "SELECT * FROM `admin`";
    
    $result = mysqli_query($connect,$sqluery);
    // print_r($result->fetch_all());exit();

    if(mysqli_num_rows($result)> 0)
    {   
    ?>
   <div class="container">
     <div class="row">
         <div class="col-md-12">
            <h2 class="bg-dark text-center text-white p-5 mt-3">Show Data</h2>
         </div>
     </div>
       <div class="row mt-4">
           <div class="col-md-12">
               <table class="table table-hover">

                  <thead>

                       <tr>

                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          
                       </tr>

                  </thead>

                  <tbody>
                    <?php   
                      while($data = mysqli_fetch_assoc($result))
                    {

                   
                    ?>
                      <tr>

                          <td><?php echo $data['ID'] ?></td>
                          <td><?php echo $data['Name'] ?></td>
                          <td><?php echo $data['Email'] ?></td>

                      </tr>
                      <?php } ?>
                  </tbody>
               </table>
           </div>
       </div>
   </div>
   <?php    } 
   
   else{

      echo "Connect Is Failed";

   }
   
   ?>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
</html>

