/*Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. 
Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. 
Создать объект класса User.*/

class Product{
    name;
    price;
    rating;

    constructor(name, price, rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

class Category{
    name;
    products;

    constructor(name){
        this.name = name;
        this. products = [];
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
let meat = new Product("Beaf", 10);
let bread = new Product("Home bread", 3);
let eggs = new Product("Eggs", 3);
let cake = new Product("Fairytale", 8);
let socks = new Product("Sock", 2);
let underpants = new Product("Family", 4);

let food = new Category("Food");
let clothes = new Category("Dress");

food.addProduct(milk);
food.addProduct(meat);
food.addProduct(bread);
food.addProduct(eggs);
food.addProduct(cake);

clothes.addProduct(socks);
clothes.addProduct(underpants);

console.log(food, clothes);

let john = new User("John", "11111");

john.addProduct(bread);
john.addProduct(eggs);
john.addProduct(underpants);

console.log(john);