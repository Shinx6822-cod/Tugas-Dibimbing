// parent class
class Vehicle{
    // encapsulation : becaouse tax can't be accessed directly
    #tax;
    constructor(name, factory, year, price){
        // public
        this.name = name;
        this.factory = factory;
        this.year = year;
        this.price = price;
    }
    
    setTax = (tax)=>{
        // privite
        this.#tax = tax;
    }

    getTax = () => {
        return this.#tax;
    }

    // abstraction : becaouse it only outputs the selling price wihout knowing where the calculation omes from
    sellingPrice = () =>'Rp. '.concat(this.#tax + this.price);

    detail = () => {
        return `${this.name} is Vehicle with factory ${this.factory}`;
    }
}

// inheritance
// child
class Car extends Vehicle{
    constructor(name, price, type){
        super(name, '', '', price);//set value yang ada di class parent
        this.name = name;
        this.price = price;
        this.type =type;
    }

    // polymorphysm : becaouse the method is named the same as the parent but different in purpose or content
    detail = ()=>{
        return `${this.name} the price is ${this.price}`;
    }
}

let honda = new Car('Honda', 1000, 'car');
honda.setTax(5000);
console.log(honda.sellingPrice());
console.log(honda.detail);