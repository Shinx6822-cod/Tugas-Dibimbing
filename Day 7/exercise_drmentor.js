class Animal {
    constructor(name, type, food) {
        this.name = name;
        this.type = type;
        this.food = food;
    }

    showDesc = () => console.log("My Name is " + this.name + " Im a " + this.type + " and my food is " + this.food);

}


// inheritance
class Cat extends Animal {
    constructor(name, food) {
        super(name, 'Cat', food)
    }

    // polymorphism
    showDesc = () => console.log("My Name is " + this.name + " and my food is " + this.food);
}

let kitty = new Cat('kitty', 'fish');
console.log(kitty);
kitty.showDesc();