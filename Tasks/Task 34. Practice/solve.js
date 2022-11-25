/*1. Дан числовой массив. Удалить все отрицательные элементы в нем,
а все положительные элементы умножить на -1.*/
console.log("Task 1");

const a = [2,7,-5,12,-34,42];
let b = [];
b = a.filter(function(item){
    return item > 0;
}).map(function(item){
    return item * -1;
});
console.log(b);

/*2. Дан числовой массив. Сформировать два новых массива:
 в первом - четные элементы массива, во втором - нечетные элементы. 
Сравнить суммы полученных массивов (определить большую).*/
console.log("Task 2");

const c = [2,5,4,6,37,12,25];
let isHonest = [];
let isOdd = [];

c.forEach(function(item){
    if(item % 2 == 0){
        isHonest.push(item);
    }else{
        isOdd.push(item);
    }
});
console.log(isHonest,isOdd);

let sum = 0;
isHonest.forEach(function(item){
    sum += item;
});
console.log(sum);

let summa = 0;
isOdd.forEach(function(item){
    summa += item;
});
console.log(summa);

if(sum > summa){
    console.log(sum);
}else{
    console.log(summa);
}

/*3. Дан числовой массив. Сформировать два новых массива: 
в первом - элементы с четными индексами, во втором - элементы с нечетными индексами. 
Сравнить суммы полученных массивов (определить большую).*/
console.log("Task 3");

const d = [2, 5, 4, 6, 37, 12, 25];
let isHonestIndex = [];
let isOddIndex = [];

d.forEach(function (item, i) {
    if (i % 2 == 0) {
        isHonestIndex.push(item);
    } else {
        isOddIndex.push(item);
    }
});
console.log(isHonestIndex, isOddIndex);

sum = 0;
isHonestIndex.forEach(function (item) {
    sum += item;
});
console.log(sum);

summa = 0;
isOddIndex.forEach(function (item) {
    summa += item;
});
console.log(summa);

if (sum > summa) {
    console.log(sum);
} else {
    console.log(summa);
}

/*4. Дан числовой массив. Найти максимальный элемент массива.*/
console.log("Task 4");

let g = [2, 7, -5, 12, -34, 42];

/*g.sort(function(a,b){
    return a - b;
});
console.log(g);

let maxElement = g.pop();
console.log(maxElement);*/

let maxElement = g.sort(function (a, b) {
    return a - b;
}).pop();
console.log(maxElement);

/*5. Дан числовой массив. Найти разность 
максимального и мининального элемента массива.*/
console.log("Task 5");

g = [2, 7, -5, 12, -34, 42];
maxElement = g.sort(function (a, b) {
    return a - b;
}).pop();
console.log(maxElement);

let minElement = g.sort(function (a, b) {
    return a - b;
}).shift();
console.log(minElement);
let difference = maxElement - minElement;
console.log(difference);

/*6. Дан числовой массив и некоторое число x. 
Удалить все элементы больше заданного числа x. */
console.log("Task 6");
//отсортировать, вернуть индекс х, вырезать всё правее х

g = [2, 7, -5, 12, -34, 42];

let x = 12;
/*g.sort(function (a, b) {
    return a - b;
});
console.log(g);
let y = g.indexOf(x);
console.log(y);

g.splice(y+1);
console.log(g);*/

let y = g.sort(function (a, b) {
    return a - b;
}).indexOf(x);
g.splice(y+1);
console.log(g);