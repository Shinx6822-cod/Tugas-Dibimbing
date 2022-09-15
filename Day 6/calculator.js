// 1. Create calculator to multiplication number
// 2. Create calculator to substraction number
// 1. Create calculator to division number
// 1. Create calculator to exponentation number
// 1. Create calculator to modulus number
// with 2 parameters

console.log('1. Kalkulator Multiplication number');
function MultiNum(a,b){ return a*b; }
console.log(MultiNum(2,3));

console.log('2. Kalkulator Substraction number');
function SubsNum(a,b){ return a+b; }
console.log(SubsNum(2,3));

console.log('3. Kalkulator division number');
function DivNum(a,b){ return a/b; }
console.log(DivNum(10,2));

console.log('4. Kalkulator exponentation number');
function ExpNum(a,b){ return a**b; }
console.log(ExpNum(10,2));

console.log('5. Kalkulator modulus number');
function ModNum(a,b){ return a%b; }
console.log(ModNum(10,2));