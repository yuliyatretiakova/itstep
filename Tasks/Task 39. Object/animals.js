/*Создать объек "собака", который издаёт звук "гав"*/

let animal = {
    name: "Барсик",
    color: "black",
    weight: 9,
    walk() {
        //console.log("Я бегу");
    },
    eat(food) {
        this.weight += food;
    }
}

let cat = {
    sound() {
        console.log("Meow");
    },  
    __proto__: animal
}

let dog = {
    sound() {
        console.log("Gav");
    },
    __proto__: animal
}
cat.sound();
dog.sound();