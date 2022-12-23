class Product{
    name;
    price = 0;
    rate = 0;

    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Category{
    name;
    products;

    constructor(name){
        this.name = name;
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

}

class Basket{
    products = [];

    addProduct(product){
        this.products.push(product);
    }    
}

class User{
    login;
    password;
    basket;

    constructor(login, password){
        this.login = login;
        this.password = password;
        this.basket = new Basket();
    }

    addProduct(product){
        this.basket.addProduct(product);
    }

}

let milk = new Product("Milk", 1);
let meat = new Product("Meat", 5);
let bread = new Product("Black bread", 1);
let cheese = new Product("Young russian cheese", 6);
let cake = new Product("Fairytale", 4);
let socks = new Product("Sock" , 2);

let food = new Category("Food");
let clothes = new Category("Cloth");

food.addProduct(milk);
food.addProduct(meat);
food.addProduct(bread);
food.addProduct(cheese);
food.addProduct(cake);

clothes.addProduct(socks);

console.log(food, clothes);

let peter = new User("Петя","qwerty");

peter.addProduct(milk);
peter.addProduct(bread);
peter.addProduct(socks);

console.log(peter);

