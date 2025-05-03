const myStr = 'colo+r';
const myStr2 = 'abcf';


const regex = /abc[^a-e]?/;

const test = regex.test(regex);

console.log(test);
