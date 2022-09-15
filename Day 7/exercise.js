class Communicationtool {
  #tax;
  constructor(nameTech, age,price) {
    this.nameTech = nameTech;
    this.age = age;
    this.price = price;
  }

  setTax = (tax) => {
    this.#tax = tax;
  };

  getTax = () => {
    return this.#tax;
  };

  sellingPrice = () => 'You need to pay Rp. '.concat(this.#tax+this.price);
  detail = ()=>`${this.nameTech} is Product about ${this.age} years old `;
}

class phone extends Communicationtool{
    constructor(nameTech, price, type){
        super(nameTech, ' ', price);//set value yang ada di class parent
        this.nameTech = nameTech;
        this.price = price;
        this.type =type;
    }
    detail = ()=> `Thank you for buying this ${this.nameTech} ${this.type}`;
}
let Iphone = new phone('Iphone', 12000000, '12');
Iphone.setTax(12000);
console.log(Iphone.sellingPrice());
console.log(Iphone.detail());