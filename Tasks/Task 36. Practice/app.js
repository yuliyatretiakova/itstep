console.log("Task 1");

let str = "Мама мыла раму";

let count = str.split(" ").length;
console.log(count);

console.log("Task 2");

str = "Мама мыла раму";

let lastWord = str.split(" ").pop();
console.log(lastWord);

lastWord = str.substring(str.lastIndexOf(" ")+1); // str.lastIndexOf(" ") - позиция последнего пробела в строке
console.log(lastWord);

console.log("Task 3");

str = "Мадагаскар";

let uniqueLetters = str.toLowerCase().split("").filter(function(item, index){
    return str.toLowerCase().indexOf(item) == index; // совпадение индекса искомого элемента будет совпадать с индексом поиска только для первого вхождения
}).join("");
console.log(uniqueLetters);

console.log("Task 4");

let str1 = "Кот";
let str2 = "Ток";

let newStr1 = str1.toLowerCase().split("").sort().join("");
let newStr2 = str2.toLowerCase().split("").sort().join("");

if(newStr1 == newStr2){
    console.log("Состоят из одних и тех же букв");
} else{
    console.log("Не состоят из одних и тех же букв");
}

console.log("Task 5");
str = "Мама мыла раму";
let findWord = "Мама";

let isFind = str.toLowerCase().split(" ").includes(findWord.toLowerCase());

console.log(isFind);

console.log("Task 6");

let deletedLetters = ".,:;!?-";
str = "Мама, мыла раму?";

let newStr = str.split("").filter(function(item){
    return deletedLetters.indexOf(item) == -1; // выбираем только те символы, которые не входят в deletedLetters
}).join("");

console.log(newStr);
