class Person{
    fullName;
    age;

    constructor(fullName, age){
        this.fullName = fullName;
        this.age = age;
    }

    toString(){
        return `Имя ${this.fullName}, возраст ${this.age}`;
    }
}

class Driver extends Person{
    expirience;

    constructor(fullName, age, expirience){
        super(fullName, age);
        this.expirience = expirience;
    }

    toString(){
        return `Имя ${this.fullName}, возраст ${this.age},опыт ${this.expirience}`;
    }
}

class Client extends Person{
    address;
    payment;

    constructor(fullName, age, address, payment){
        super(fullName, age);

        this.address = address;
        this. payment = payment;
    }

    toString(){
        return `Имя ${this.fullName}, возраст ${this.age}, адрес ${this.address}, способ оплаты ${this.payment}`; 
    }

}

class Engine{
    power;
    company;

    constructor(power, company){
        this.power = power;
        this.company = company;
    }

    toString(){
        return `Мощность ${this.power}, производитель ${this.company}`;
    }
}

class Car{
    carClass;
    marka;
    engine;
    driver;

    constructor(carClass, marka, engine, driver){
        this.carClass = carClass;
        this.marka = marka;
        this.engine = engine;
        this.driver = driver;
    }

    start(){
        this.engine.power = 100;
    }

    stop(){
        this.engine.power = 0;
    }

    turnRight(){
        console.log("Правый поворот");
    }

    turnLeft(){
        console.log("Левый поворот");
    }

    toString(){
        return `Класс машины ${this.carClass}, марка ${this.marka}, двигатель ${this.engine.toString()}, водитель ${this.driver.toString()}`
    }
}

class Lorry extends Car{
    
    carrying;

    constructor(carClass, marka, engine, driver, carrying){
        super(carClass, marka, engine, driver);
        this.carrying = carrying;
    }

    toString(){
        return `Класс машины ${this.carClass}, марка ${this.marka}, двигатель ${this.engine.toString()}, водитель ${this.driver.toString()}, вместимость ${this.carrying}`;
    }
}

class SportCar extends Car{
    
    speed;

    constructor(carClass, marka, engine, driver, speed){
        super(carClass, marka, engine, driver);
        this.speed = speed;
    }

    toString() {
        return `Класс машины ${this.carClass}, марка ${this.marka}, двигатель ${this.engine.toString()}, водитель ${this.driver.toString()}, скорость ${this.speed}`;
    }
}

class Taxi extends Car{
    tarif;

    constructor(carClass, marka, engine, driver, tarif){
        super(carClass, marka, engine, driver);
        this.tarif = tarif;
    }

    toString(){
        return `Марка автомобиля ${this.marka}, водитель ${this.driver.toString()}, тариф ${this.tarif}`;
    }
}

class Order{
    distance;
    taxi;
    client;

    constructor(distance, taxi, client){
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }

    getPrice(){
        return this.distance * this.taxi.tarif;
    }

    toString(){
        console.log(this.client.fullName, this.client.payment, this.distance, this.getPrice());
    }
}

let engine = new Engine(250, "Volvo");

let driver = new Driver("Harry Potter", 35,"5 years");

let client = new Client("Tom Redal", 36, "Hogsmith str.", "cash");
let myTaxi = new Taxi("sedan","Renaut", engine, driver,"1.5");
let myOrder = new Order(25, myTaxi, client);

console.log(client, myTaxi, myOrder);
console.log(myOrder.getPrice());
console.log(client.toString());
console.log(myTaxi.toString());
myOrder.toString();


/*let ferrari = new SportCar("sport car","Ferrari", engine, driver, 350);

console.log(ferrari);
console.log(ferrari.toString());

let maz = new Lorry("lorry","MAZ",engine,driver, 200);
maz.driver.fullName = "Иванов И.И.";
maz.driver.age = 57;
maz.driver.expirience = 20;
maz.engine.power = 240;

console.log(maz);
console.log(maz.toString());*/


