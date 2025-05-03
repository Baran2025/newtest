function show(){
    console.log("Clicked");
}


function showDate(){
    let date = new Date();
    document.getElementById("date").innerHTML = date
}

function applyStyles(){

    document.getElementById("text").style.fontSize = "25px";
    document.getElementById("text").style.textTransform = "uppercase";
}

let text = document.getElementById("sample-text");

function font(){

    text.classList.toggle("font")
}

function color(){

    text.classList.toggle("color")
}

function bold(){

    text.classList.toggle("bold")
}

function normal(){

    text.classList.remove("font","color","bold")
}