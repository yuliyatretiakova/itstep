let a = "hello";

console.log(a[0]);

a[0] = "f";

console.log(a[0]);

a = "Hello world!";

console.log(a);

console.log("Перевод в верхний регистр:");
let b = a.toUpperCase();

console.log(a, b);

console.log("Перевод в нижний регистр:");
b = a.toLowerCase();

console.log(a, b);

b = b[0].toUpperCase() + b.slice(1);

console.log(b);

console.log(" Разделение текущей строки на массив строк путём удаления указанной подстроки");
let str = "Madagaskar";
b = str.split("a");// "a" - указанная подстрока
console.log(b);

b = str.split(""); // разделение строки на массив символов

console.log(b);

console.log(" Объединение текущего массива в строку путём вставки между элементами массива указанной подстроки");
str = b.join(""); // соединение элементов в одну строку

console.log(str);

str = b.join(",");// соединение элементов через запятую в одну строку

console.log(str);

console.log(" Замена одной подстроки на другую (первое вхождение)");
str = str.replace("a", "o"); 
console.log(str);

console.log(" Замена одной подстроки на другую (все вхождения)");
while(str.indexOf("a") != -1){
    str = str.replace("a", "o");
}
console.log(str);

console.log("Удаление подстроки (первое вхождение)");
str = str.replace("M", "");

console.log(str);
console.log("Удаление подстроки (все вхождения)");
while(str.indexOf(",") != -1){
    str = str.replace(",", "");
}

console.log(str);

console.log("Удаление пробелов в начале и конце строки");
let x = " Вася    ";

x = x.trim();

console.log(x);

x = "Черепаха";

console.log("Получить кусочек строки от начального символа до конечного (конечный не включается)");
str = x.substring(0,5);

console.log(str);

console.log("Получить кусочек строки от начального символа заданной длины");
str = x.substr(2,4); // устаревшая функция

console.log(str);