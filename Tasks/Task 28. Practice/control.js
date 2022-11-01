/*1. Дана площать квадрата. Найти его периметр.*/
console.log(`task 1`);
var s = 4;
var a = s ** 0.5;
var p = a * 4;
console.log(p);

/*2. Даны длины сторон стреугольника - a, b, c. 
Определить, является ли он разностронним, ранобедренным или равносторонним*/
console.log(`task 2`);

a = 5;
var b = 5;
var c = 5;// сумма двух сторон должна быть больше третьей
if((a != b) && (a != c) && (b != c)){
    console.log(`Треугольник разносторонний`);
} else if((a == b) && (b ==c)){
    console.log(`Треугольник равносторонний`);
} else{
    console.log(`Треугольник равнобедренный`);
}

/*3. Даны 3 числа a, b, c. Можно ли из них составить треугольник со стронами равными a, b, c. */
console.log(`task 3`);

a = 1;
b = 1;
c = 5;
if(((a + b) > c) && ((a + c) > b) && ((b + c) > a)){
    console.log(`Из сторон a, b и c можно составить треугольник`);
} else{
    console.log(`Из сторон a, b и c нельзя составить треугольник`);
}

/*4. Дано число k (от 1 до 300) и последовательность следующего вида: 
100101102103104105..198199. Вывести k-цифру в этой последовательности.*/
console.log(`task 4`);

/*5. Дано 2 числа. Если сумма этих чисел четная, то вывести произведение, если нет - то частное.*/
console.log(`task 5`);

a = 25;
b = 28;
if ((a + b) % 2 == 0){
    console.log(a * b);
} else{
    console.log(a / b);
}

/*6. Дан возраст человека. Вывести, что он молодой (до 17), взрослый (от 18 до 69) 
или пожилой (от 70).*/
console.log(`task 6`);

a = 18;
if(a <= 17){
    console.log(`Молодой`);
} else if((a >= 18) && (a <= 69)){
    console.log(`Взрослый`);
} else{
    console.log(`Пожилой`);
}

/*7. Дан радиус круга и сторона квадрата. Опеределить, поместится ли круг в квадрат, 
либо квадрат в круг, либо ничего ни во что не поместится.*/
console.log(`task 7`);

a = 2;//радиус круга
b = 3;//сторона квадрата
var dSquare;//диагональ квадрата
var dCircle;//диаметр круга
dSquare = ((b ** 2) + (b ** 2)) ** 0.5;
console.log(dSquare);
dCircle = a * 2;
console.log(dCircle);

if(dCircle >= dSquare){
    console.log(`Квадрат поместится в круг`);
} else if(dCircle <= b){
    console.log(`Круг поместится в квадрат`);
} else{
    console.log(`Ничего ни во что не поместится`);
}

/*8. Дан день, месяц и год (3 числа). Определить, является ли дата корректной.*/
console.log(`task 8`);

var day = 28;
var month = 2;
var year = 1700;

if((year < 100) && (year % 4 == 0)){
    if((month == 2) && ((day >= 1) && (day <= 29))){
        console.log(`${day,month,year} корректная дата`);
    } else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && ((day >= 1) && (day <= 31))){
        console.log(`${day,month,year} корректная дата`);
    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && ((day >= 1) && (day <= 30))){
        console.log(`${day,month,year} корректная дата`);
    } else {
        console.log(`${day, month, year} некорректная дата`);
    }
} else if ((year < 100) && (year % 4 != 0)){
    if ((month == 2) && ((day >= 1) && (day <= 28))) {
        console.log(`${day,month,year} корректная дата`);
    } else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && ((day >= 1) && (day <= 31))) {
        console.log(`${day,month,year} корректная дата`);
    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && ((day >= 1) && (day <= 30))) {
        console.log(`${day,month,year} корректная дата`);
    } else {
        console.log(`${day,month,year} некорректная дата`);
    }
}
if ((year > 100) && (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)){
    if ((month == 2) && ((day >= 1) && (day <= 29))) {
        console.log(`${day, month, year} корректная дата`);
    } else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && ((day >= 1) && (day <= 31))) {
        console.log(`${day, month, year} корректная дата`);
    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && ((day >= 1) && (day <= 30))) {
        console.log(`${day, month, year} корректная дата`);
    } else {
        console.log(`${day, month, year} некорректная дата`);
    }
} else {
    if ((month == 2) && ((day >= 1) && (day <= 28))) {
        console.log(`${day, month, year} корректная дата`);
    } else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && ((day >= 1) && (day <= 31))) {
        console.log(`${day, month, year} корректная дата`);
    } else if ((month == 4 || month == 6 || month == 9 || month == 11) && ((day >= 1) && (day <= 30))) {
        console.log(`${day, month, year} корректная дата`);
    } else {
        console.log(`${day, month, year} некорректная дата`);
    }
} 

/*9. Даны координаты точки (x,y). Определить в какой четверти 
(1,2,3 или 4) лежит точка либо она лежит на какой-то оси координат.*/
console.log(`task 9`);

var x = 0;
var y = -8;

if(x != 0 && y == 0){
    console.log(`Точка лежит на оси абсцисс`);
} else if (x == 0 && y != 0){
    console.log(`Точка лежит на оси ординат`);
} else if (x == 0 && y == 0) {
    console.log(`Точка начала координат`);
} else if (x > 0 && y > 0) {
    console.log(`Точка лежит в 1 четверти`);
} else if (x < 0 && y > 0) {
    console.log(`Точка лежит во 2 четверти`);
} else if (x < 0 && y < 0) {
    console.log(`Точка лежит в 3 четверти`);
} else if (x > 0 && y < 0) {
    console.log(`Точка лежит в 4 четверти`);
}

/*10. Даны 2 окружности (радиусы и центры). определить их взаимное расположение.*/
console.log(`task 10`);

/*11. Пользователь вводит 2 числа и опрерацию (+, -, *, /). 
Вывести результат или сообщение о ошибке.*/
console.log(`task 11`);
a = 2;
b = 34;
var g = "*";
if(g == "+"){
    console.log(`${a + b}`);
} else if(g == "-"){
    console.log(`${a - b}`);
} else if (g == "*") {
    console.log(`${a * b}`);
} else if ((g == "/") && (b == 0) ) {
    console.log(`error`);
} else{
    console.log(`${a / b}`);
}

/*12. Найти сумму первых 20 натуральных чисел кратных 5.*/
console.log(`task 12`);

s = 0;//сумма
var n = 0;//количество сложенных чисел
a = 1;

while(n <= 20){
    if(a % 5 == 0){
        s += a;
        n++;
    }
    a++;
}
console.log(s);


/*13. Составьте программу, выводящую в консоль квадраты чисел от 10 до 20.*/
console.log(`task 13`);

for(let i = 10; i <= 20; i++){
    b = i ** 2;
    console.log(b);
}

/*14. В бригаде, работающей на уборке сена, имеется N сенокосилок. 
Первая сенокосилка работала m часов, а каждая следующая на 10 минут больше, 
чем предыдущая.Сколько часов проработала вся бригада?*/
console.log(`task 14`);
var N = 5;
var m = 6;
s = 6;

for(let i = 1; i <= N; i++){
    m = m + 1 / 6;
    s += m;
}
console.log(s);

/*15. Найти произведение двузначных нечетных чисел кратных 13.*/
console.log(`task 15`);

var product = 1;//произведение

for(let i = 10; i <= 99; i++){
    if((i % 2 != 0) && (i % 13 == 0)){
        product *= i;
    }
}
console.log(product);

/*16. Дан прямоугольник размерами NхM. Каждый раз от него отрезают квадрат 
со стороной равной меньшей стороне оставшегося прямоугольника. Например, 
прямоугольник 10х6, то сначала отрезаю 6х6, потом 4х4 и т.д. Сколько нужно 
сделать отрезаний до того, как получится квардрат.*/
console.log(`task 16`);


/*17. Пользователь задумал число от 1 до 100. Компьютер пытается его угадать 
(генерирует случайное число). После того, как компьютер называет число, 
пользователь говорит меьнше, больше или равно загадонному. Комьютер соотвественно 
генерирует заного число, но с учетом того, что сказал пользователь. 
Вывести все числа, которые сгенерировал компьютер перед тем как угадать 
число пользваотеля (Игра Угадай).*/
console.log(`task 17`);

var Q = 50;
var min = 1, max = 100;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

if(randomNumber = Q){
    console.log(`Вы загадали число ${Q}`);
} else if(randomNumber > Q){
    Q += 25;
    console.log(`Вы загадали число ${Q}`);
}
