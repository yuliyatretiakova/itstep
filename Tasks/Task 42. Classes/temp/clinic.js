class Animal{
    food;
    location;

    constructor(food, location){
        this.food = food;
        this.location = location;
    }

    toString(){
        return `Food: ${this.food}, locations: ${this.location}`;
    }
    sleep(){
        console.log("animal sleep");
    }

    makeNoise(){
        console.log("Zzzzz....");
    }

    eat(){
        console.log("animal is eating");
    }
}

class Cat extends Animal{
    lives = 9;

    constructor(food, location, lives){
        super(food, location);

        this.lives = lives;
    }

    makeNoise(){
        console.log("Meoe");
    }

    eat(){
        console.log("cat eat milk");
    }    
}

class Dog extends Animal{
    hasMuzzle = false;
    makeNoise(){
        console.log("Gau-gau");
    }

    eat(){
        console.log("dog eat meat");
    }      
}

class Horse extends Animal{

    hooves = 4; 

    makeNoise(){
        console.log("Igo-igo");
    }

    eat(){
        console.log("horse eat grass");
    }     
}

class Doctor{

    cat; // class Cat
    constructor(cat){
        this.cat = cat;
    }

    treatAnimal(animal){
        console.log(animal.food, animal.location);
    }
}


let cat = new Cat("milk", "street");
let dog = new Dog("meat", "street");
let horse = new Horse("herb", "house");

let Aibolit = new Doctor(cat);

console.log(Aibolit.cat.location);

let animals = [];
animals.push(cat);
animals.push(dog);
animals.push(horse);

animals.forEach(function(animal){
    console.log(animal);
    Aibolit.treatAnimal(animal);
    animal.makeNoise();
    animal.eat();
    animal.sleep();
    console.log(animal.toString());
})