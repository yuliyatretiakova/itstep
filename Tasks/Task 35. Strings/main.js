/*1. Дана строка 'js'. Сделайте из нее строку 'JS'.*/
console.log("Task 1");

let a = 'js';
let b = a.toUpperCase();
console.log(b);

/*2. Дана строка 'JS'. Сделайте из нее строку 'js'.*/
console.log("Task 2");

b = b.toLowerCase();
console.log(b);

/*3. Дана строка 'я учу javascript!'. 
Найдите количество символов в этой строке.*/
console.log("Task 3");

let c = 'я учу javascript!';
console.log(c.length);

/*4. Дана строка 'я учу javascript!'. 
Вырежите из нее слово 'учу' и слово 'javascript' 
тремя разными способами (через substr, substring, slice).*/
console.log("Task 4");

c = 'я учу javascript!';
let d = c.substr(2,3);
console.log(d);
let e = c.substr(6,10);
console.log(e);
d = c.substring(2,5);
console.log(d);
e = c.substring(6, 16);
console.log(e);
d = c.slice(2, 5);
console.log(d);
e = c.slice(-11, -1);
console.log(e);

/*5. Дана строка 'я учу javascript!'. 
Найдите позицию подстроки 'учу'.*/
console.log("Task 5");

c = 'я учу javascript!';
d = c.indexOf('учу');
console.log(d);

/*6. Дана переменная str, в которой хранится какой-либо текст. 
Реализуйте обрезание длинного текста по следующему принципу: 
если количество символов этого текста больше заданного в переменной 
n, то в переменную result запишем первые n символов строки str и 
добавим в конец троеточие '...'. В противном случае в переменную 
result запишем содержимое переменной str.*/
console.log("Task 6");

c = 'я учу javascript!';
let n = 6;
let result;
if(c.length > n){
    result = c.slice(0,n);
    console.log(result + '...');
}else{
    console.log(c);
}

/*7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.*/
console.log("Task 7");

let f = 'я-учу-javascript!';

while(f.indexOf("-") != -1){
    f = f.replace("-", "!");
}
console.log(f);

/*8. Дана строка 'я учу javascript!'. 
С помощью метода split запишите каждое слово этой строки 
в отдельный элемент массива.*/
console.log("Task 8");

d = c.split(" ");
console.log(d);

/*9. Дана строка 'я учу javascript!'. 
С помощью метода split запишите каждый символ этой строки 
в отдельный элемент массива.*/
console.log("Task 9");

d = c.split("");
console.log(d);

/*10. В переменной date лежит дата в формате '2025-12-31'. 
Преобразуйте эту дату в формат '31.12.2025'.*/
console.log("Task 10");

let date = '2025-12-31';
date = date.split("-").reverse().join(".");
console.log(date);

/*11. Дан массив ['я', 'учу', 'javascript', '!']. 
С помощью метода join преобразуйте массив в строку 
'я+учу+javascript+!'.*/
console.log("Task 11");

let h = ['я', 'учу', 'javascript', '!'];
d = h.join("+");
console.log(d);

/*12. Преобразуйте первую букву строки в верхний регистр.*/
console.log("Task 12");

let j = 'я хочу домой!';
d = j[0].toUpperCase() + j.slice(1);
console.log(d);

/*13. Преобразуйте первую букву каждого слова строки в верхний регистр.*/
console.log("Task 13");

j = 'я хочу домой!';
j = j.split(" ").map(function(item){
    return item[0].toUpperCase() + item.slice(1);
}).join(" ");
console.log(j);

/*14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, 
должен работать с любыми аналогичными строками.*/
console.log("Task 14");

let k = 'var_test_text';
k = k.split("_").map(function(item,i){
    if(i != 0){
        return item[0].toUpperCase() + item.slice(1);
    } else{
        return item;
    }
}).join("");

console.log(k);