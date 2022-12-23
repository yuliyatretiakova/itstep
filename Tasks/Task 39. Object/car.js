let car = {
    marka: "Renaut",
    model: "Duster",
    fuel: "Gasoline",
    print(){
        console.log(this.marka, this.model);
    }
}

let auto = {
    country: "France",
    drive(){
        console.log(this.country);
    },
    __proto__: car 
}

let plain = {
    mover: 4,
    fly(){
        console.log(this.mover);
    },
    __proto__: car
}

let train = {
    cargo: 10,
    move(){
        console.log(this.cargo);
    },
    __proto__: car
}

car.print();
auto.print();
auto.drive();
plain.print();
plain.fly();
train.print();
train.move();
