// document.getElementById("myheading").innerHTML = "Naseer Gill";
// document.getElementById("myheading").innerHTML = "Patrick";


function changeName(){

     document.getElementById("myheading").innerHTML = "Naseer Gill";

}

function showName(){

    document.getElementById("myheading").innerHTML = "Zain Gill";
    
}

function hideName(){

    document.getElementById("myheading").innerHTML = "";
    
}

function changeColor(){

    document.getElementById("myheading").style.color = "red";
    document.getElementById("myheading").style.backgroundColor = "blue";
    document.getElementById("myheading").style.textAlign = "center";
    
}
var size = 32;
size  = size  + 2;
function increaseFontSize(){

    document.getElementById("myheading").style.fontSize = `${size}px`;
  

    
}

function decreaseFontSize(){


    document.getElementById("myheading").style.fontSize = "20px";

    
}

function changeBgColor(){
    
    var myvalue = document.getElementById("mycolor").value; 
    document.getElementById("body").style.backgroundColor = myvalue;
}