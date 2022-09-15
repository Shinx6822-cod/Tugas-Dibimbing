// function constructor and class can be used to create a object

// // constructor dunction
// function Person(name) {
    
//     // assigning parameter values to the calling object
//     this.name = name;

//     // defining method
//     this.greet = function() { return 'Hello ' + this.name;
//     }
// }

// // keywrord new used to create a new instance object
// let john = new Person('John');

// // accesing property
// console.log(john.name);//John

// // accesing method
// console.log(john.greet());//Hello John

// let pratama = new Person('Pratama');
// console.log(pratama.greet());

// class
class Person1 {
    // private property
    #id;

    constructor(name, age,gender){
        this.name = name;
        this.age = age;
        this.gender;
    }
    
    setId(id) {
        this.#id = id;
    }

    getId() { 
        return this.#id; 
    }

    setName(name){
        this.name = name;
    }
    
    getName(){
        return this.name;
    }
    // setter getter
    setAge = (age) => this.age = age;

    getAge = () => this.age;

    // defining method
    greet(){
        console.log(`Hello ${this.name}`);
    }
}

john.setId('1234');

// // accessing property
console.log(john.getId()); // John

// keyword new used to create a new instance object
let John = new Person1('John', 10);

// accesing property
console.log(John.name);//John
// accesing method
John.greet();//Hello John

John.setAge(17);
console.log(John.getAge());

let Pratama = new Person1('Pratama');
Pratama.greet();

