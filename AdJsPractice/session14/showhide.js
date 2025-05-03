function showPassword(){

   var myvalue = document.getElementById("txtpassword").getAttribute("type","text"); 

if(myvalue == "password")
{
    document.getElementById("txtpassword").setAttribute("type","text");
    document.getElementById("myimage").setAttribute("src","images/hide.png");

}else{

    document.getElementById("txtpassword").setAttribute("type","password");
    document.getElementById("myimage").setAttribute("src","images/show.png");

}


    // document.getElementById("txtpassword").setAttribute("type","text");
    // document.getElementById("myimage").setAttribute("src","images/hide.png");
}