/*6. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.*/
let array = new Array(100);
let min = 1;
let max = 250;

for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(array);

let maxElement = array.sort(function (a, b) {
    return a - b;
}).pop();

let minElement = array.sort(function (a, b) {
    return a - b;
}).shift();
let result = maxElement - minElement;
console.log(result);