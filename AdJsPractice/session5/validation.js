function validation(){
    let p1 = document.getElementById("p1").value
    let p2 = document.getElementById("p2").value

    if(p1 !=="" && p2 !== ""){
        
        console.log(p1,p2);

        if(p1 == p2){

            return true
        }
    }else{

        alert("Both password word Are Same.")
        return false
    }

      alert("Enter Both Passwords.")
      return false

}