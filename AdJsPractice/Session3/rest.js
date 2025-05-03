// function add (n1,n2){
//          console.log(n1 + n2);
//  }
    
//     add(2,3)
//     add(2,3,1)
//     add(2,3,4,5)

function add(...numbers) {

    const sum = numbers.reduce(

        (acc, num) => acc + num, 0
        
    );

    console.log(sum);
}

add(2, 3);          
add(2, 3, 1);   
add(2, 3, 4, 5);  
