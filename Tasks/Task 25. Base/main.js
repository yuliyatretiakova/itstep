var name = "Вася"; 
const surname = "Пупкин";
var height, weight;
height = 180;
weight = 0.89;
var weigtkg = weight * 100;
console.log("Меня зовут", name, surname, ". Я вешу", weight, "ц. Мой рост", height, "см.");
var newHeight = 180 - 2;
var newWeight = 0.89 + 0.1;
console.log(name, surname, "потолстел и стоптался.");
name = "Петя";
var newWeightFat = newWeight * 2;
console.log("Теперь я", name, surname, "и вешу в", newWeightFat / weight, "больше, чем в молодости.")

//Дана строна квадрата. Расчитать его периметр
var a = 2;
var p = a * 4;//периметр квадрата
console.log(p);

//Дан радиус окружности. Найти площадь круга.(Число пи взять из модуля Math.PI)
var r = 5;
var S = Math.PI * r**2;// площадь круга
console.log(S);

//Дан 2 катета a и b в прямоугольном треугольнике. Найти гипотенузу с.
var a = 3;
var b = 4;
var c = a**2 + b**2;//возведение в квадрат
var cAnswer = c**0.5;//извлекаем корень
console.log(cAnswer);

//Дано 2 переменных. Обменять их значения, используя 3 переменную.
a = 2;
b = 3;
var d;
console.log(a, b);
d = a;
a = b;
b = d;
console.log(a, b)

//Дано 3-х значное число. Найти сумму его цифр (123 -> 6).