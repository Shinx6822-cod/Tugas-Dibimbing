// for statement
console.log('Im Wrong');
console.log('Im Wrong');
console.log('Im Wrong');
console.log('Im Wrong');

// show number 1 to 100
for (let i = 1; i <=100;i++){
    console.log(i);
}

let cars = ['toyota', 'tesla', 'marcedes'];
console.log(cars.length);
console.log(cars[2]);
for(let i = 0;i < cars.length;i++){
    console.log(cars[i]);
}

// while statement 
let num = 0;
while (num < 6){
    console.log(`While : the number is ${num}`);
    num++;
}
console.log("--------------------------");

// do while statement
do{ //melakukan console dulu baru ngecek kondisi
    console.log(`Do While : the number is ${num}`);
    num++;
}   while (num <6);
