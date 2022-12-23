/*1. Посчитать количество слов в строке.*/
console.log("Task 1");
let str = 'Посчитать количество слов в строке';
str = str.split(" ");
console.log(str.length);

/*2. Вывести последнее слово в предложении.*/
console.log("Task 2");

let a = "Вывести последнее слово в предложении.";
let b = a.slice(-12, -1);
console.log(b);

/*3. Дано слово. Вывести набор букв, 
из которых состоит это слово без повторений.*/
console.log("Task 3");

let word = "панама";
let c = [];
b = word.split("").forEach(function(item){
    if(!c.includes(item))
        c.push(item);
});
console.log(c);



/*4. Даны 2 слова. Проверить, состоят ли 
они из одних и тех же букв.*/
console.log("Task 4");

let str1 = "Ток";
let str2 = "Кот";

let newStr1 = str1.toLowerCase().split("").sort().join("");
let newStr2 = str2.toLowerCase().split("").sort().join("");

if(newStr1 == newStr2){
    console.log("Состоят из одних и тех же букв");
}else{
    console.log("Не состоят из одних и тех же букв");
}

/*5. Дано предложение. Проверить, есть ли 
в этом предложение заданное слово.*/
console.log("Task 5");
let sentence = "Дано предложение";
let w = "дано";
b = sentence.toLowerCase().split(" ");

    if(b.includes(w)){
        console.log("true");
    }else{
        console.log("false");
    } 

/*6. Удалить из предложения все знаки препинания 
(. , : ; ! ? -).*/
console.log("Task 6");

let deletedLetters = ".,:;!?-";
str = "Мама, мыла раму?";

let newStr = str.split("").filter(function (item) {
    return deletedLetters.indexOf(item) == -1; // выбираем только те символы, которые не входят в deletedLetters
}).join("");

console.log(newStr);
