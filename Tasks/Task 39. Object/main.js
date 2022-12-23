/*1. Создайте пустой объект user.*/
console.log("Task 1");

let user = {};
console.log(user);

/*2. Добавьте свойство name со значением John.*/
console.log("Task 2");

user.name = "John";
console.log(user);

/*3. Добавьте свойство surname со значением Smith.*/
console.log("Task 3");

user.surname = "Smith";
console.log(user);

/*4. Измените значение свойства name на Pete.*/
console.log("Task 4");

user.name = "Pete";
console.log(user);

/*5. Удалите свойство name из объекта.*/
console.log("Task 5");

delete user.name;
console.log(user);

/*6. Пусть дан объект с зарплатами сотрудников. 
Найти сумму зарплат с использованием for..in.*/
console.log("Task 6");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for(let key in salaries){
    sum += salaries[key];
}
console.log(sum);

/*7. Дан объект. Написать код, который создает 
его точный клон (новый объект с такой же структурой).*/
console.log("Task 7");

user = {
    name: "Иван",
    age: 30
};

let userClone = {};

for(let key in user){
    userClone[key] = user[key];
}

userClone = Object.assign({}, user);

console.log(user, userClone);

/*8. Дан объект. Написать код, который создает 
его точный клон (новый объект с такой же структурой).*/
console.log("Task 7");

user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};

let cloneUser = Object.assign({}, user);

console.log(user, cloneUser);

