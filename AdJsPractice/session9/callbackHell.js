function firstFn(callback){
    setTimeout(()=>{
        console.log("first function call after 1 seconds");
    callback()
    
},1000)

}

function secondFn(callback){
    setTimeout(()=>{
        console.log("first function call after 2 seconds");
    callback()
    
},2000)

}

function thirdFn(callback){
    setTimeout(()=>{
        console.log("first function call after 3 seconds");
    callback()
    
},3000)

}

function fourthFn(callback){
    setTimeout(()=>{
        console.log("first function call after 4 seconds");
    callback()
    
},4000)

}

function fithFn(callback){
    setTimeout(()=>{
        console.log("first function called at Once");
    callback()
    
},5000)

}


firstFn(function(){
    secondFn(function(){
        thirdFn(function(){
            fourthFn(function(){
                fithFn(function(){

                })
            })
        })
    })
})