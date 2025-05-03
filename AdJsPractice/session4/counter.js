let counter = document.querySelector(".counter");
let follower = document.querySelector(".follower");


let count = 0;

setInterval(() => {
    if(count<500){
        count++
        counter.innerText = count
    }
}, 1);

setTimeout(() => {
    follower.innerText = "Baran Patrick"
}, 3000);