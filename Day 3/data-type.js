// data type
let message = "Hello jum'at";

// console.log(message);   

// string
// String is used to store text. In JaveScript, string are surrounded by quote:

// Single quotes: 'Hello'
// Double quotes : "Hello"
// Backticks: `Hello`

let str ="Hello";
let str2 = 'Single Quote are ok too';
let phrase = `can embed ${str}`; //1

let tempStr = str + str2; //2

console.log(tempStr.concat(phrase)); //3
console.log(str); 

// number
let n = 123;
console.log(typeof(n)); 

n = 12.345;
console.log(typeof(n)); 

// boolean : value is only true &false
const dataChecked = true;
const valueCounted = false;

console.log(dataChecked);
console.log(valueCounted);