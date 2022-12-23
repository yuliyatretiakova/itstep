
function generateRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fillRandomArray(a, n) {
    for (let i = 0; i < n; i++) {
        a[i] = generateRandomNumber(1, 100);
    }
}

let b = [];
fillRandomArray(b, 10);
function maxElementInArray(b) { 
    let maxElement = b[0];
    for(i = 1; i < b.lenght; i++){
        if(b[i] > maxElement){
            maxElement = b[i];
        }
    }
    return maxElement;
}

function indexMaxElementInArray(b){
    let maxIndex = 0;
    for (let i = 1; i < b.length; i++) {
        if (b[i] > b[maxIndex]) {
            maxIndex = i;
        }
    }
    return maxIndex;
}

function showArrayByCommas (b){
    let resalt = b[0];
    for (let i = 1; i < b.length; i++) {
        resalt += "," + b[i];
    }
    console.log(resalt);//return не нужен, чтобы получить результат, просто вызываем функцию
}

function evenNumbersDivByTwo (b){
    let t = 2;
    for(let i = 0; i < b.length; i++){
        if(b[i] % 2 == 0){
            b[i] /= t;
        }
    }
}

let e;
function findElementInArray (b, e){
    for(let i = 0; i < b.length; i++){
        if(b[i] == e){
            return true;
        }
    }
    return false;
}

function findIndexInArray(b, e) {
    for (let i = 0; i < b.length; i++) {
        if (b[i] == e) {
            return i;
        }
    }
    return -1;
}

/*1. Разрабоать функцию для генерации случаного целого числа от min до max.*/
console.log("Task 1");
let x = generateRandomNumber(1, 25);
console.log(x);

/*2. Разработать функцию для заполнения массива случаныйми числами.*/
console.log("Task 2");
let a = [];
fillRandomArray(a, 10);
console.log(a);

/*3. Разработать функцию для нахождения максимального элемента в массиве.*/
console.log("Task 3");

let y = maxElementInArray(b);
console.log(b,y);

/*4. Разработать функцию для нахождения индекса максимального элемента в массиве.*/
console.log("Task 4");

let c = indexMaxElementInArray(b);
console.log(b,c);

/*5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)*/
console.log("Task 5");

showArrayByCommas(b);
console.log(b);

/*6. Разработать функцию, которая уменьшает четные элементы в 2 раза.*/
console.log("Task 6");

console.log(b);//неизменённый массив
evenNumbersDivByTwo(b);//для того, чтобы вызвать измененный массив не нужно присваивать вывод функции переменной, вызываем прямо функцию
console.log(b);//массив после применения функции

/*7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.*/
console.log("Task 7");

console.log(b,findElementInArray(b,25));


/*8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, 
если находит его, и -1 - в противном случае.*/
console.log("Task 8");

console.log(b, findIndexInArray(b,27));
