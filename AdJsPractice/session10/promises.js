const promiseFour = new Promise(function(resolve, reject){
   setTimeout(function(){
       let error = false
       if(!error)
       {
          resolve({username: "Baran",password: "12345"})
       }else{
            reject("Wrong Credentions");
       }
       
   },1000)

})

promiseFour
.then((user)=>{
   console.log(user);
   return user.username;
})
.then((username)=>{
    console.log(username);
    // return(user.username);
 })
 .catch((error)=>{
    console.log(error);
    // return(user.username);
 })
 .finally(() => console.log("The promise is either Resolved And Rejected"));
