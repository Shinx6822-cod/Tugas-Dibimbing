//equal operator
// == cek by value saja atau == membandingkan tanpa memperhatikan tipe data
console.log('equal oeprator');
console.log(2 == 2); //true
console.log( 2 == '2'); //true

// not operator
console.log(3 != 2); //true
console.log('hello' != 'Hello'); //true

// strict equal operator
// === cek by value dan data type atau === membandingkan dengan memperhatikan tipe data dan value nya
console.log('strict equal operator');
console.log(2 === 2); //true
console.log(2 === '2'); //false

// strict not equal operator
console.log(2 !== '2'); //true
console.log(2 !== 2); //false

// greater than 
console.log(3 > 2);

// greater than or equal
console.log(3>=3);

// less than
console.log(3<3);

// less than or equal
console.log(2<=2);

// ganjil genap
let num =17;
console.log(num %2 ===0);

// apakah nama siswa itu fiqri dan umur nya adalah 25
let nama ='fiqri', age = 25;
console.log(nama === 'fiqri' && age === 25);
