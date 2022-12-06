/*1. Дано число N. Получить массив 
квадратов чисел от 1 до N.*/
console.log("Task 1");

let a = [];
let N = 10;
for(let i = 1; i < N; i++){
   let item = i **2;
    a.push(item);
}
console.log(a);

/*2. Дан числовой массив. Что больше сумма положительных чисел 
или модуль суммы отрицательных чисел. 
(Модуль числа - значение числа без знака).*/
console.log("Task 2");

a = [5,4,-3,-5,6,12,-36,52,-2,18];
let b = [];
let c = [];
a.filter(function(item){
    if(item > 0){
        b.push(item);
    }else{
        c.push(item);
    }
});
console.log(b,c)

let sum1 = 0;
let sum2 = 0;
let d = b.reduce(function(sum1, item){
    return sum1 += item;
}, 0);
console.log(d); 
let e = c.reduce(function (sum2, item) {
    return sum2 += item;
}, 0);
console.log(e);

if(d > -e){
    console.log("Сумма положительных чисел больше модуля суммы отрицательных чисел")
}else{
    console.log("Сумма модуля отрицательных чисел больше суммы положительных чисел")
}

/*3. Дан числовой массив. Удалить все нулевые элементы из массива.*/
console.log("Task 3");

b = [0,4,7,12,0,3,5,32,0];
b = b.filter((item) => item != 0);
console.log(b);

/*4. Дан числовой массив. В массиве чисел найти 
два самых больших элемента, не используя функцию sort().*/
console.log("Task 4");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
b = [];
let maxElement = a.reduce((maximum, item) => {
    if ((item > maximum)) {
        return item;
    } else {
        return maximum;
    }
});
console.log(maxElement);//не дорешала

/*5. Дан числовой массив. Поменять максимальный и минимальный элемент местами. 
(максимальный и минимальный элементы не повторяются)*/
console.log("Task 5.1");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
a = a.sort((a,b) => a - b);
console.log(a);
[a[0], a[a.length - 1]] = [a[a.length - 1], a[0]];
console.log(a);

console.log("Task 5.2");
a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
console.log(a);
maxElement = a.reduce((maximum,item) => {
    if ((item > maximum)) {
       return item;
    }else{
        return maximum;
    }
});
console.log(maxElement);

let minElement = a.reduce((minimum, item) => {
    if ((item < minimum)) {
        return item;
    } else {
        return minimum;
    }
});
console.log(minElement);
b = a.indexOf(maxElement);
c = a.indexOf(minElement)
console.log(b,c);
[a[b], a[c]] = [a[c], a[b]];
console.log(a);



/*6. Дан числовой массив. Вывести все элементы, 
которые больше предыдущего элемента.*/
console.log("Task 6");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];

for (let i = 0; i < a.length; i ++){
    if(a[i] > a[i - 1]){
        console.log(a[i]);
    }
}

/*7. Дан числовой массив и 2 числа N, M, причем N < M. 
Найти все элементы, которые лежат в интервале от N до M.*/
console.log("Task 7");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
N = -2;
let M = 16;
a.forEach(function(item){
    if(item > N && item < M){
        console.log(item);
    }
});

/*8. Дано число. Получить новое число, 
состоящее из цифр данного числа, расставленных в порядке убывания.*/
console.log("Task 8");

let number = 187349;
let waneNumber = String(number).split("").sort().reverse().join("");
waneNumber = Number(waneNumber);
console.log(waneNumber);

/*9. Дано дата в формате "день.месяц.год". 
Найти порядковый номер дня относительно начала года.*/
console.log("Task 9");

let theDate = "06.10.1984";

/*10. Дан массив чисел. Найти число в массиве с наибольшим суммой цифр.*/
console.log("Task 10");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];

/*11. Дано предложение. Найти длину самого короткого слова.*/
console.log("Task 11");

let sentence = "Вместе весело шагать по просторам";
let shortestWord = sentence.split(" ").reduce(function(word, item){
    if (item.length < word.length){
        return item;
    }
    return word;
});
console.log(shortestWord.length);

/*12. Даны 2 слова. Удалить из обоих слов буквы, 
которые встречаются в обоих словах.*/
console.log("Task 12");

let word1 = "пижама";
let word2 = "панама";
let newWord1 = [];
let newWord2 = [];
word1 = word1.split("").filter(function(item){
    if(!word2.includes(item)){
        newWord1.push(item);
    }
});
word1 = "пижама";
word2 = word2.split("").filter(function (item) {
    if (!word1.includes(item)) {
        newWord2.push(item);
    }
});
console.log(newWord1, newWord2);

/*13. Дано предложение. 
Вывести слова в предложение в порядке убывания.*/
console.log("Task 13");

sentence = "Я на солнышке лежу";
sentence = sentence.toLowerCase().split(" ").sort((a, b) => b.length - a.length);

console.log(sentence);


/*14. Дано предложение. 
Вывести частоту стречаемости каждого символа в строке.*/
console.log("Task 14");

/*const gdgdg = text => {
return Object.entries(text.split('').reduce((acc, currEl) => {
    acc[currEl] = (acc[currEl] || 0) + 1;

    return acc;
}, 0))
}*/

/*15. Дано слова. Получить 2 новые строки, 
где 1 строка состоит из гласных букв слова в верхнем регистре, 
а вторая строка - из согласных в нижним регистре.*/
console.log("Task 15");

word = "Электросоковыжималка";
let vowels = "аеёиоуыэюя";
b = [];
c = [];
word = word.toLowerCase().split("").filter(function(item){
    if(vowels.includes(item)){
        b.push(item);
    }else{
        c.push(item);
    }
});
b = b.join("").toUpperCase();
c = c.join("");
console.log(b,c)

/*16. Дана строка. Подсчитать количество цифр встречающихся в строке.*/
console.log("Task 16");

let str = "33 коровы, 33 коровы, 33 коровы - свежая строка";
let numbers = "0123456789";
sum = 0;
str = str.split("").filter(function(item){
    if (numbers.includes(item)){
        sum++;
    }
});
console.log(sum);

/*17. Дана строка. Вывести символы, которые в ней повторяются.*/
console.log("Task 17");

str = "33 коровы, 33 коровы, 33 коровы - свежая строка";
b = [];
str = str.split("").sort().filter(function(item, index, array){
    if(item == array[index +1]){
       if(!b.includes(item)){
           b.push(item);
       } 
    }
});
console.log(b);

/*18. Дан числовой массив. Заменить каждый 
элемент массива с нечетным индексом на ноль.*/
console.log("Task 18");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
b = a.map(function(item,index){
    if(index % 2 == 1){
       return item = 0;
    }
    return item;
});
console.log(b);

/*19. Дан числовой массив. Преобразовать массив так, 
чтобы сначала шли нулевые элементы, а затем все остальные.*/
console.log("Task 19");

b = [0, 4, 7, 12, 0, 3, 5, 32, 0];
b.sort((a,b) => a - b);
console.log(b);

b = [0, 4, 7, 12, 0, 3, 5, 32, 0];
a = [];
c = [];
b.filter(function(item){
    if(item == 0){
        a.push(item);
    }else{
        c.push(item);
    }
});
console.log(a,c);
b = a.concat(c);
console.log(b);

/*20. Дан числовой массив. Найдите наименьший четный элемент массива. 
Если такого нет, то выведите первый элемент.*/
console.log("Task 20");

a = [5, 4, -3, -5, 6, 12, -36, 52, -2, 18];
let minHonestElement = a[0];
for(let i = 1; i < a.length; i++){
    if((a[i] % 2 == 0) && (a[i] < minHonestElement)){
        minHonestElement = a[i];
    }  
}
console.log(minHonestElement);

minHonestElement = a[0];
a.map(function(item, index, array){
    if ((item % 2 == 0) && (item < minHonestElement)) {
        minHonestElement = item;
    }
});
console.log(minHonestElement);
minHonestElement = a.reduce((minimum,item) => {
    if ((item % 2 == 0) && (item < minimum)){
        return item;
    }else{
        return minimum;
    }
},a[0]);
console.log(minHonestElement);