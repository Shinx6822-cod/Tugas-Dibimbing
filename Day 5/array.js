// let car1 = 'Saab';
// let car2 = 'Volvo';
// let car3 = 'BMW';

// console.log(car1);
// console.log(car2);
// console.log(car3);

let cars = ['Saab', 'Volvo', 'BMW'];
// console.log('--------------------');
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
// console.log(cars.length);
// console.log('--------------------');

// // output only number
// for(let i = 0; i < cars.length; i++){
//     console.log('index :',i);
//     // array refering by index
//     console.log(cars[i]);
// }
// console.log('--------------------');

// // output element or value of array cars
// for(const element of cars){
//     // element
//     console.log(element);
// }

console.log('before',cars);
console.log('--------------------');

// Insert an element at the end of the array
// cars.push('Tesla');
// console.log('--------------------');

// // insert a value at the beginning of the array
// cars.unshift('Lambo');
// console.log('--------------------');

// // remove an element from the end of the array
// cars.pop();
// console.log('--------------------');

// // remove an element from the begininng of the array
cars.shift();
console.log('--------------------');

console.log('after', cars);
console.log('--------------------');

// determine
// if a value is an array
console.log(Array.isArray(cars));
console.log('--------------------');

// determine the size of an array
console.log(cars.length);


