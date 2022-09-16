// // deklarasi sebuah function
// // reuseable code

// // function
// // program to print a function
// function greet(){
//     console.log('Hello world');
// }

// // calling the function
// greet();

// // function parameter
// // program to print the text
// // declaring a function
// function greetWithParameters(name){
//     console.log(`Hello ${name} :)`);
// }
// // variabel name can be different
// let name = 'Sonny';

// // calling function 
// greetWithParameters(name);

// function return
// program to add two numbers
// declaring a function
// function add(a,b){
//     return a+b;
// }

// // take input from the user
// let number1 = 70;
// let number2 = 50;

// // calling function
// let result = add(number1,number2);

// // display the result
// console.log('The sum is ' + result);

// // function exspresion
// // program to find the square of anumber
// // funcion is declared inside the Variabel
// let x = function (num) { return num*num }
// console.log(x(4));

// // can be used as variabel value for other variabels
// let y = x(3);
// console.log(y);

// // arrow function
// let greet = ()=>console.log('Hello');
// greet();//Hello

// let greet = x => console.log(x);
// greet('Hello'); //Hello

// let multiplication = (num1,num2) => num1 * num2; 
// console.log(multiplication(2,3));
// // callback function
// // function
// function greet(name,callback){
//     console.log('Hi' + ' ' + name);
//     callback();
// }

// callback function
function callMe(){
    console.log('I am callback function');
}
// passing function as an argument
greet('Sonny');

// program that shows the delay in execution
function greet(){
    console.log('Hello World');
}

function sayName(name){
    console.log('Hello' + ' ' + name);
}
// calling the function
setTimeout(greet,2000);
sayName('John');
