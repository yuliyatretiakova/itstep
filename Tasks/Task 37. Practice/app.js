console.log("Task 1");

let n = 10, value = 1;

let x = (new Array(n)).fill(value);

console.log(x);

console.log("Task 4");

let a = [1, 2, 3, 2];
let b = [1, 2, 3, 1];

if(a.length == b.length){
    let isEqual = a.every(function(item, index){
        return a[index] == b[index]; // item == a[index]
    });
    if(isEqual){
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}

console.log("Task 10");

a = [1, 2, 3, 4];
b = [1, 2, 4, 5, 7];
let c = [2, 5, 7]; 
let result = [];

a.forEach(function(item){
    if(b.includes(item) && !c.includes(item))
        result.push(item);
    if(!b.includes(item) && c.includes(item))
        result.push(item);
});

b.forEach(function(item){
    if(c.includes(item) && !a.includes(item))
        result.push(item)
});

console.log(result);

console.log("Task 9");

b = [7, 2, 4, 5, 1];
let A = 3;

a = b.filter((item) => item < A);
c = b.filter((item) => item > A);

a = a.concat(c);

console.log(a);

console.log("Task 11");

let vowels = "уеыаоэяиюё";
let word = "электросоковыжималка";
let count = word.split("").filter((item) => vowels.includes(item)).length;

console.log(count);

console.log("Task 12");
word = "электросоковыжималка";

let str = word.split("").map((item, index) => (index % 2 == 0) ? item.toLowerCase() : item.toUpperCase()).join("");

console.log(str);

str = word.split("").map(function(item, index){
    if(index % 2 == 0){
        return item.toLowerCase();
    } else {
        return item.toUpperCase();
    }
}).join("");

console.log(str);

console.log("Task 13");

let path = "D:\\ITStep\\itstep2\\Tasks\\Task 37. Practice\\task.txt";

path.split("\\").forEach(function(item, index, array){
    if(index != 0 && index != (array.length - 1)){
        console.log(item);
    }
});

console.log("Task 14");

word = "электросоковыжималка";
a = word.split("");
result = [];
a.forEach(function(item, index){
    if(index % 3 == 0){
        result.push(word.substring(index, index + 3));
    }
});

console.log(result);

result = [];

for(let index = 0; index < word.length; index+= 3){ //index+= 3 - c шагом равным 3
    result.push(word.substring(index, index + 3)); //substring вырезает от первого параметра до второго, то есть длина равна второй параметр минус первый
}

console.log(result);

console.log("Task 15");

word = "топот";

let inverseWord = word.split("").reverse().join("");
if(word.toLowerCase() == inverseWord.toLowerCase()){
    console.log("Палиндром");
} else {
    console.log("Не палиндром");
}

console.log("Task 16");

str = "Аргентина манит негра";

let longWord = str.split(" ").reduce(function(word, item){// word - самое длинное слово
    if(item.length > word.length){
        return item;
    }
    return word;
}, "");

console.log(longWord);

console.log("Task 17");

let words = ["Москва", "Архангельск", "Киев", "Витебск", "Киров"];

let isTrue = words.every(function(word, index, array){ //array == words, word == array[index]    
    if(index > 0){
        if(word[0].toLowerCase() == array[index - 1].slice(-1).toLowerCase()){ //array[index - 1] - предыдущее слово, slice(-1) - последняя буква
            return true;
        }
        return false;
    }
    return true;
});

console.log(isTrue);

console.log("Task 18");

b = [7, 2, 4, 5, 1];
let N = 4;

a = b.sort((a, b) => a - b).splice(-4);

console.log(a);

console.log("Task 19");

let sentence1 = "Мама мыла раму";
let sentence2 = "Папа мыла раму";
let array1Words = sentence1.split(" ");
let array2Words = sentence2.split(" ");

count = array1Words.filter((item) => array2Words.includes(item)).length;

console.log(count);

console.log("Task 20");

let sentence = "Мама    мыла    раму";

sentence = sentence.split("").filter(function(letter, i, array){
    if(letter == " " && array[i+1] == " ")
        return false; // не включаем текущий символ, если он равен пробелу и следующий символ тоже пробел
    return true;
}).join("");

console.log(sentence);

console.log("Task 7");

let alphabet  = "abcdefghijklmnopqrstuvwxyz";

sentence = "Brick quiz whangs jumpy veldt fox!";

isTrue = sentence.toLowerCase().split("").filter((letter) => alphabet.includes(letter)).filter((item, index, array) => array.indexOf(item) == index).sort().join("") == alphabet; // sentence.toLowerCase().split("").filter((letter) => alphabet.includes(letter)).filter((item, index, array) => array.indexOf(item) == index).sort().join("") - это строка, которую мы сравниваем с другой строкой

console.log(isTrue);

console.log("Task 8");

x = 123456;

x = + x.toString().split("").reverse().join(""); // + имеет наименьший приоритет и применяется псоле всех опреций справа от него

console.log(x);

console.log("Task 21");

a = [7, 2, 4, 5, 1];

b = [7, 2, 4, 5, 1];

K = 9;

a.forEach(function(item){
    if(b.includes(K - item)){
        console.log(item, K-item);
    }
});