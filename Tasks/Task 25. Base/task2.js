//Задание 1
var name = "Вася";
const lastname = "Пупкин";

var height, weight;

height = 180;
weight = 0.89;

var newWeight = weight * 100;

var str = "Меня зовут " + name + " " + lastname + ". Я вешу " + weight + " ц. Мой рост - " + height + " см.";
console.log(str);
console.log("Меня зовут", name, lastname, ". Я вешу", weight, "ц. Мой рост -", height, "см.");
console.log(`Меня зовут ${name} ${lastname}. Я вешу ${weight} ц. Мой рост - ${height} см.`);

newWeight = newWeight + 10;
height = height - 2;

console.log(`${name} ${lastname} потолстел и стоптался`);

name = "Петя";
newWeight = newWeight * 2;

console.log(`Теперь я ${name} ${lastname} и вешу в ${newWeight/(weight*100)} больше, чем в молодости`);

//Задание 2
var a = 2;
var p = a * 4;
console.log(p);

var r = 2;
var square = Math.PI * r ** 2;
console.log(square);

var b = 3, c = 4;
var d = (b ** 2 + c ** 2) ** 0.5;
console.log(d);

a = 1;
b = 2;
console.log(a,b);
c = a;
a = b;
b = c;
console.log(a,b);


var n = 345; // 345 = abc

// % - это оператор для нахождения остатка деления одного числа на другое
c = n % 10; // последняя цифра числа
b = ((n - c) / 10 ) % 10; // вторая цифра
a = (n - b * 10 - c) / 100; // первая цифра

console.log(a+b+c); // сумма цифр
console.log(c*100 + b*10 + a); // запись числа в обратном порядке его цифр

console.log(5 + - "4");
