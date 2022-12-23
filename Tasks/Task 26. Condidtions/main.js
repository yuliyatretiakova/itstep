//1. Дано число. Проверить, четное оно или нечетное.
var a = 3;
if (a % 2 == 0){         //если остаток от деления на 2 равен 0
    console.log ("a - четное");
} else {
    console.log ("a - нечетное");
}

//2. Дано 2 числа. Вывести только нечетные числа из 2 чисел.
var b = 3; var c = 4;
if (b % 2 == 1){
    console.log (b);
}
if (c % 2 == 1){
    console.log(c);
} 

//3. Дано 2 числа. Вывести максимальное из 2 чисел.
var d = 5; var e = 9;
if (d >= e){
    console.log (d);
} else {
    console.log (e);
}

//4. Дано 3 числа. Вывести максимальное из 3 чисел.
var f = 6; var g = 8; var h = 10;
if ((f >= g) && (f >= h)){
    console.log (f);
}
if ((g >= f) && (g >= h)){
    console.log(g);
}
if ((h >= g) && (h >= f)){
    console.log(h);
}

//5. Дано 3 числа. Вывести среднее по значению из 3 чисел. переменные из задачи 4
if (((f >= g) && (f <= h)) || ((f <= g) && (f >= h))) {
    console.log(f);
}
if (((g >= f) && (g <= h)) || ((g <= f) && (g >= h)))  {
    console.log(g);
}
if (((h >= g) && (h <= f)) || ((h <= g) && (h >= f))) {
    console.log(h);
}

/*6. Дано длины сторон треугольника. Определить, может ли существовать 
треугольник с такими сторонами при условии что, треугольник существует 
только тогда, когда ни одна его сторона не превышает сумму двух других.
Переменные из задания 4*/
if ((f < (g + h)) && (g < (f + h)) && (h < (f + g))) {
    console.log ("Может существовать")
}

/*7. Даны координаты точки, а также радиус круга, центр которого находится 
в начале координат. Определить, принадлежит ли данная точка кругу.*/
var r = 2; //радиус круга
var x = 3; var y = 2; //координаты точки

/* x**2 + y**2 = R**2 - уравнение окружности с центром в начале координат
=> точка будет внутри окружности при условии x**2 + y**2 < r**2*/
if ((x**2 + y**2) < r**2) {
    console.log ("Принадлежит");
} else {
    console.log("Не принадлежит");
}

/* 8. Дано год. Определить, високосный это год или нет. Вывести в консоль 
соответствующую надпись, а также количество дней в году.*/
var j = 2024; // год
if ((j % 4 != 0) || ((j % 4 == 0) && (j % 100 == 0) && (j % 400 != 0))) {
    console.log ("Год не високосный. 365 дней");
} else  {
    console.log ("Год високосный. 366 дней");
} 

/* 9. Дан номер дня недели и время в часах и минутах по отдельности. Определить, 
рабочее это время или нет, если время считается рабочим с 1 по 5 день с 8.00 по 17.00.*/
var w = 3; //номер дня недели
var z = 17; //часы
var m = 1; //минуты
if (((w >= 1) && (w <= 5)) && ((z >= 8) && (z < 17))) {
    console.log ("Рабочее время");
} else if ((z >= 17) && (m >= 1)) {
    console.log ("Время не рабочее");
}

/*10. Дано число грибов. Вывести в консоль число и слово "грибы" с соответствующим 
окончанием (например, "17 грибов", "1 гриб", "2 гриба" и т.д.) */
//1-гриб
//2,3,4 - гриба
//5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20 - грибов

/*11. Даны коэфицианты квардратного уравнения. 
Вывести его корни или сообщение об их отсутствии.  */

/* ax=b линейное уравнение вывести на консоль значение х в зависимости от условий: а=0 и а!=0*/
a = 0, b = 0;
if ( a != 0) {
    console.log (`корень  ${b / a}`);
} else if ((a == 0) && (b == 0)) {
    console.log (`корень любой`);
} else { //if ((a == 0) && (b != 0))
    console.log (`корней нет`)
}