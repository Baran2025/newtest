const contact = '+92311-0005953';

 const regex = /^(\+92|0)\d{3}-?\d{7}$/;


const result = regex.test(contact);

console.log(result);

