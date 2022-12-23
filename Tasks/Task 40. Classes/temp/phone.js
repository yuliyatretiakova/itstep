class Phone{
    number; 
    model; 
    weight;

    constructor(n, m, w){
        this.number = n;
        this.model = m;
        this.weight = w;
    }
    receiveCall(name){
        console.log(`Звонит ${name}`);
    }
    getNumber(){
        return this.number;
    }
}


let Samsung = new Phone("+1111111111","Samsung", 100);
let Iphone = new Phone("+1111111112","Apple", 200);
let Siemens = new Phone("+1111111113","Siemens", 300);

console.log(Samsung, Iphone, Siemens);

Samsung.receiveCall("Бил Гейтс");
let number = Samsung.getNumber();
console.log(number);

Iphone.receiveCall("Стив Джобс");
number = Iphone.getNumber();
console.log(number);

Siemens.receiveCall("Кто-то из Филлипин");
number = Siemens.getNumber();
console.log(number);