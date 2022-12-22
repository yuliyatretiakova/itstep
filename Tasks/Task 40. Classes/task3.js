/*Задание #3
Рядом с мышью — и гусь велик, но вот рядом с драконом... 
В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). 
А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. 
Затем переопределите для Goose и Dragon метод getSize(), так, чтобы они выводили строки 
о размере животного.*/

class SmallAnimal{
    size;
    color;
    food;

    constructor(size, color, food){
        this.size = size;
        this.color = color;
        this.food = food;
    }
    getSize(){
        console.log(this.size);
    }
}

class BigAnimal{
    size;
    color;
    food;

    constructor(size, color, food) {
        this.size = size;
        this.color = color;
        this.food = food;
    }
    getSize() {
        console.log(this.size);
    }
}


class Goose extends SmallAnimal{
    plumage;

    constructor(size, color, food, plumage){
        super(size, color, food);
        this.plumage = plumage;
    }

    getSize(){
        console.log(this.size);
    }
}

class Dragon extends BigAnimal{
    scales;

    constructor(size, color, food, scales){
        super(size, color, food);
        this.scales = scales;
    }

    getSize() {
        console.log(this.size);
    }
}

let goose = new Goose("small","wite", "grass", "in plumage");
let dragon = new Dragon("huge", "red", "meat", "is scales");
let mouse = new SmallAnimal("tiny", "grey", "grai");
let tiger = new BigAnimal("big","orange-black", "meat");

console.log(goose, dragon, mouse, tiger);
goose.getSize();
dragon.getSize();
mouse.getSize();
tiger.getSize();