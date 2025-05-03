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
<title>Create</title>
</head>
<body>
<div class="container">
     <div class="row">
         <div class="col-md-12">
             <h2 class="bg-primary text-center text-white p-4 fs-1">Create-Form</h2>
         </div>
     </div>
     <div class="row">
          <div class="col-md-12">
            
              <form action="Allquery.php" method="post">
                  <div class="form-row">
                      <div class="col-md-12">
                          <label for="">ID</label>
                          <input type="text" class="form-control" name="id" placeholder="Enter your ID"  required> 
                      </div>

                      <div class="col-md-12">
                          <label for="">Name</label>
                          <input type="text" class="form-control" name="stdname" placeholder="Enter your Name"  required> 
                      </div>

                      <div class="col-md-12">
                          <label for="">Email</label>
                          <input type="text" class="form-control" name="stdemail" placeholder="Enter your Email"  required> 
                      </div>
                  </div>
                  <input type="submit" name="savebtn" value="Save Data" class="btn btn-danger mt-3 fs-2">
              </form>
          </div>
     </div>
</div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
</html>