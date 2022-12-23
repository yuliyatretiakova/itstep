//фуункция-конструктор
function user(name){
    // код функции
    this.name = name;
    this.age = "";

    function setSalary(salary){
        this.salary = salary * 1.35;
    }

    function print(){
        console.log(this.name);
    }
}

let otherUser = function(name){
    // код функции
}

let admin = new user("Вася");
let manager = new user("Петя");

console.log(admin, manager);

// синтаксический сахар для функции-конструктора
class User{

    name;
    age;
    weigth;
    height;
    salary;


    constructor(name){
        this.name = name; // this.name - свойство объекта, name - параметр функции
    }

    setSalary(salary){
        this.salary = salary * 1.35;
    }

    print(){
        console.log(this.name);
    }
}

let Admin = new User("Петя");
let Manager = new User("Вася");
Admin.setSalary(100);
console.log(Admin, Manager);


class Animal{
    name;
    color;
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    print(){
        console.log(this.name, this.color);
    }
}


class Cat extends Animal{

    breed;

    sound(){
        console.log("Meow");
    }

    print(){
        console.log(this.name, this.color, this.breed);
    }
}

let animal = new Animal("Животное", 'Хаки');
let barsik = new Cat("Барсик", "Черный");

barsik.breed = "Двортерьер";

console.log(animal, barsik);
animal.print();
barsik.print();
barsik.sound();