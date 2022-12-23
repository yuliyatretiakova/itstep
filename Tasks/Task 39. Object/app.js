let user = {
    name: "Вася",
    age: 30,
    eyeColor: "brown",
    height: 180,
    adres: {
        city: "Витебск",
        street: "Ленина",
        coords: {
            x: 55,
            y: 40
        } 
    },
    "™╜": "хрень",
    0: "sdf", 
};
console.log(user.age, user["age"], user.adres.street, user.adres.coords.x, user["™╜"], user.length );// user.™╜

let admin = {
    name: "Вася",
    age: 30,
};
console.log(admin.age, admin["height"]);

let a = [1,2, 3, 4, 5];

for(let key in a){
    // key - имя свойства(поля)
    // user[key] - значение  свойства(поля)
    console.log(key, a[key]);
}
admin.height = 181;

console.log(admin.age, admin["height"]);

user = {};
admin = new Object();

let user1 = user;
user.name = "Петя";
console.log(user1.name, user.name);



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries){
    sum += salaries[key]; // key = John, Ann, Pete ; salaries[key] = 100, 160, 130
}

console.log(sum);

user = {
    name: "Иван",
    age: 30
};

let cloneUser = {}; // создаем новый объект

for(let key in user){
    cloneUser[key] = user[key];
}

cloneUser = Object.assign({}, user); // универсальный способ клонирования объекта в новую переменную

console.log(user, cloneUser);

user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
cloneUser = {};

// ручное создание клона
for(let key in user){
    if(typeof user[key] != "object") 
        cloneUser[key] = user[key];
    else {
        cloneUser[key] = {};
        for(let key1 in user[key]){
            cloneUser[key][key1] = user[key][key1];
        }
    }
}

console.log(user, cloneUser);


// проверка пустоты объекта
function isEmpty(object) {
    for(let key in object){
        return false;
    }
    return true;
}

let u = {};
console.log(isEmpty(u));
u = {
    name: "sgdg",
}
console.log(isEmpty(u));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function doubleNumber(object){
    for(let key in object){
        if(typeof object[key] == "number"){
            object[key] *= 2;
        }
    }
}
doubleNumber(menu);

console.log(menu);


delete user.name;

