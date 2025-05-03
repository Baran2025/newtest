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
                   <h2 class="bg-danger text-white text-center p-5">Create-Form</h2>
              </div>
         </div>
       <div class="row mt-3">
            <div class="col-md-12">
                <form action="Allquery.php" method="post">
                    <div class="form-row">
                        <div class="col-md-12">
                             <label>Name</label>
                             <input type="text" name="stdname" class="form-control" id="validationCustom01" placeholder="Enter your Name" required>
                        </div>


                        <div class="col-md-12">
                             <label>Email</label>
                             <input type="email" name="stdemail" class="form-control" id="validationCustom02" placeholder="Enter your Email" required>
                        </div>
                    </div>
                    <input type="submit" name="savebtn" class="btn btn-primary mt-3" value="Save Data">
                </form>
            </div>
       </div>
  </div>

</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.0/js/bootstrap.min.js"></script>
</html>