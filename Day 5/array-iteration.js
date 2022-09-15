let cars =['Saab', 'Volvo', 'BMW'];

// Creates a new array by performing a function on each array element
// let carsMap = cars.map((car,i) =>{
//     if(i==1){
//         car ='Tesla';
//     }
//     return car;
// });

// console.log('use map');
// console.log('initial',cars);
// console.log('map', carsMap);

// console.log('use forEach');
// cars.forEach((car,i)=>{
//     console.log(car + ' ' +i);
// });

// // creates a new array with all element that satisfies the condition mentioned in the function
// cars = cars.filter(car=>car !=='BMW');
// console.log('Initial', cars);

// method returns a boolean value (true/false) based on at least one element in the array passing the condition in the function
let someIsVolvo = cars.some(car => car =='Volvo');
console.log(someIsVolvo);

// method detect if every element of the array satisfies the condition passed in the function
let arrayIsValid = cars.every(car => car ==='');
console.log(arrayIsValid);