let user = {

    name : "Asad",
    age : 23,
    city : "Karachi"

}

let {name,age,city} = user

console.log(name);
console.log(age);
console.log(city);

let {name : n, age :a, city : c } = user

console.log(n,a,c);