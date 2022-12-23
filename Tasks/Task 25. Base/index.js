var a = 18, b = 30, c = 21, d = 20;
var e = a * 3600 + b * 60;
var f = c * 3600 + d * 60;
var g = f - e;
console.log(g);

//задача 2 найти отношение площади прямоугольника к его периметру
var a = 3, b = 1;
var s = a * b;
var p = (a + b) * 2;
var r = s / p;
console.log(r);

//задача 3 есть 1000р под 10% на 3 года. сколько составит чистая прибыль
var myMoney = 1000; base = 1000;
var procent = (myMoney / 100 * 10);
myMoney = myMoney + procent;
procent = (myMoney / 100 * 10);// 1 год
myMoney = myMoney + procent;
procent = (myMoney / 100 * 10);// 2 год
myMoney = myMoney + procent;
procent = (myMoney / 100 * 10);// 3 год
console.log(myMoney - base);
