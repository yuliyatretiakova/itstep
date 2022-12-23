var x = "2";
var n = 3;
var b = true;
console.log("Строка + число", x + n);
console.log("Строка + boolean", x + b);
console.log("Строка + null", x + null);
console.log("Строка + undefined", x + undefined);
console.log("Строка + NaN", x + NaN);

var a = 2;
//a++ <=> a = a + 1; a-- <=> a = a - 1;
var c = a++; // c = 2, a = 3 c = a; a = a + 1;
var d = ++a; // d = 4, a = 4 a = a + 1; d = a;
// вместо  d = ++a; лучше писать a++; d = a;
console.log(a, c ,d);

var e = 4;
e += 2; // e = e + 2;
console.log(e)
e -= 2; // e = e - 2;
console.log(e)
e *= 2; // e = e * 2;
console.log(e)
e /= 2; // e = e / 2;
console.log(e)