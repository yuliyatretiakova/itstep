/*1. Дан массив из n элементов и число k<n. 
Вывести последние k элементов массива.*/
console.log("Task 1");

let a = [];
let n = 10;
let k = 2;
let min = 1;
let max = 100;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

for(let i = a.length - k; i < a.length; i++){
    console.log(a[i]);
}

/*2. Дан массив из n элементов и число k. 
Вывести все элементы кратные числу k.*/
console.log("Task 2");

k = 5;
for(i = 0; i < a.length; i++){
    if (a[i] % k == 0){
        console.log(a[i]);
    }
}

/*3. Дан массив из n элементов. 
Вывести сумму максимального и минимального элемента.*/
console.log("Task 3");

let maxElement = a[0];
let minElement = a[0];

for(let i = 1; i < a.length; i++){
    if (a[i] > maxElement){
        maxElement = a[i];
    }

    if (a[i] < minElement){
        minElement = a[i];
    }
}
console.log(`${maxElement + minElement}`);

/*4. Дан массив из n элементов. 
Поменять максимальный и минимальный элементы местами.*/
console.log("Task 4");

let maxIndex = 0;
let minIndex = 0;
let x;//переменная для обмена значениями
for (let i = 1; i < a.length; i++){
    if(a[i] > a[maxIndex]){
        maxIndex = i;
    }

    if(a[i] < a[minIndex]){
        minIndex = i;
    }
}
console.log(a, a[maxIndex], a[minIndex]);

x = a[maxIndex];
a[maxIndex] = a[minIndex];
a[minIndex] = x;
console.log(a);

/*5. Дан массив из n элементов. Создать 2 новых массива. 
В 1 первый записать все элементы с четными индексами, 
во 2 - с нечетными.*/
console.log("Task 5");

let b = [];
let c = [];
let j = 0;
let y = 0;
console.log(a);

for(i = 0; i < a.length; i +=2){
    b[j] = a[i];
    j++; 
}
console.log(b);

for (i = 1; i < a.length; i += 2) {
    c[y] = a[i];
    y++;
}
console.log(c);

/*6. Дан массив из n элементов. 
Увелить все нечетные элементы на 1 
и уменьшить все четные в 2 раза.*/
console.log("Task 6");

console.log(a);

for (i = 0; i < a.length; i ++) {
   if(a[i] % 2 != 0){
       a[i] += 1;
   } else if (a[i] % 2 == 0){
       a[i] /= 2;
   } 
}

console.log(a);

/*7. Дан массив из n элементов и некоторое число x. 
Проверить наличие числа x в массиве.*/
console.log("Task 7");

console.log(a);
x = 24;
let isFind = false;

for(i = 0; i < a.length; i++){
    if(a[i] == x){
       isFind = true;
       break;
    } 
}
if(isFind){
    console.log(`Нашли ${x}`);
} else{
    console.log(`Не нашли ${x}`);
}

/*8. Дан массив из n элементов и число k<n. 
Удалить элемент с номером k и сдвинуть на  
одну позицию влево все элементы, следующие за ним.*/
console.log("Task 8");

console.log(a);
k = 7;
let u = a[k];

for(let i = k; i < a.length; i++){
    a[i] = a[i+1];
}
console.log(a);

/*9. Дан массив из n элементов. Проверить, 
упорядочен ли массив по возрастанию или убыванию.*/
console.log("Task 9");

console.log(a);

/*10. Дан массив из n элементов. Удалить все повторяющие элементы 
(удалить и сдвинуть следующие за ним).*/
console.log("Task 10");

console.log(a);