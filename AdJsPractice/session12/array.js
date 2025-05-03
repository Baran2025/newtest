// var student = ["Anus","Zain","Danish","Haris","Kashif","Asad"];

// for(var i = 0; i <= student.length; i++){

// document.write(`${student[i]} <br> `)

// }

var student = ["Anus","Zain","Danish","Haris","Kashif","Asad"];

document.write("<ol>")

for(var i = 0; i <= student.length; i++)
{

    document.write(`<li>${student[i]} </li> `)
    
 }
document.write("</ol>")