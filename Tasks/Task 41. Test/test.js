//var a = 5;
//let a; из-за let, 

//console.log(a); //ошибка, а уже объявлена

function count() {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    return i + j;
}

console.log(count());// 7

console.log(+false, +null, +undefined);// 0, 0, NaN (0 - числа);
var obj = {
    "0": 1,
    0: 2
};

console.log(obj["0"] + obj[0]);// 4 - ???

a = 2, с = 0;
var b = a + a * a / с;
console.log(b);// Infinity (т.к. с = 0, а при делении на "0" получаем бесконечность)

var x = "a" * 2;
if (x === NaN)
    x = 1;
else
    x = x * x;

console.log(x);// NaN

var x = "1";
if ("0")
    x++;
else
    x += 3;
console.log(x);// 2

//let b = 3

//function F() {
  //  var a = 1;
    //if (a == 1) {
    //    var b = 2;
    //}
    //return b;
//}

//console.log(F());// код содержит ошибку, b уже объявлена

//var x = 1;
//if (x) {
  //  let y = 3;
//}
//else {
//    let y = 2;
//}
//let z = x + y;
//console.log(z);// код содержит ошибку, у не определена

var n = [4, 6, 19, 34, 32];
console.log(n.sort());

var a = Array();
a[a.length] = 0;
console.log(a.length);//1

console.log('0xFF     ' - '1');// 254

console.log(true + "test");//truetest

var a = 12;
(function run() {
    console.log("a = ", a);
    var b = 500
})()
console.log("a = ", a);
console.log("b = ", b);// в вариантах ответа нет этого варианта
//a =  12
//a = 12
//b = Infinity

var x = [];
var y = x;
y[0] = 7;

console.log(x[0],x === y);// 7 true

var a;
switch (a) {
    case 0:
        console.log(0); break;
    case null:
        console.log(null); break;
    case undefined:
        console.log(undefined); break;
    default:
        console.log("something else");// something else
}

let s = "Hello"
s[4] = ""
console.log(s);// Hello - ???

var student = {
    name: "Mark",
    age: 25
}

for (let i in student) {
    console.log(i);
}
/*name
age*/

for (let i in student) {
    console.log(student);
}
/*{ name: 'Mark', age: 25 }
{ name: 'Mark', age: 25 }*/

for (let i in student) {
    console.log(student.i);
}
/*undefined
undefined*/

for (let i in student) {
    console.log(student[i]);
}
/*Mark
25*/

var a = 3;

switch (a) {
    default:
        a += 4;
    case 1:
        a += 2;
        break;
    case 2:
        a += 3;
        break;
}

console.log(a);// 9 - ???

console.log(checkValue(a));// 1
var a = 1;
function checkValue(value) {
    if (value) {
        return +!!a;
    } else {
        return !!a;
    }
}

const u = parseInt("7*6", 10)
console.log(u);// 7
