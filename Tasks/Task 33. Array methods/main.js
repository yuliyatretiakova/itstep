/*1. Даны два массива: [1, 2, 3] и [4, 5, 6]. 
Объедините их вместе.*/
console.log("concat");

let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);

console.log(c);

/*2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].*/
console.log("reverse");

a = [1, 2, 3];
c = a.reverse();

console.log(c);

/*3. Дан массив [1, 2, 3]. 
Добавьте ему в конец элементы 4, 5, 6.*/
console.log("push");

a = [1, 2, 3];
c = a.push(4,5,6);

console.log(a);

/*4. Дан массив [1, 2, 3]. 
Добавьте ему в начало элементы 4, 5, 6.*/
console.log("unshift");

a = [1, 2, 3];
c = a.unshift(4, 5, 6);

console.log(a);

/*5. Дан массив [7, 9, 3]. Выведите на экран первый элемент.*/
console.log("shift");

let g = [7,9,3];
c = g.shift();

console.log(c);

/*6. Дан массив [7, 9, 3]. Выведите на экран последний элемент.*/
console.log("pop");

g = [7, 9, 3];
c = g.pop();

console.log(c);

/*7. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода slice запишите в новый элементы [1, 2, 3].*/
console.log("slice1");

let h = [1,2,3,4,5];
let j = h.slice(0,3);

console.log(j);

/*8. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода slice запишите в новый элементы [4, 5].*/
console.log("slice2");

h = [1, 2, 3, 4, 5];
j = h.slice(3);

console.log(j);

/*9. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice преобразуйте массив в [1, 4, 5].*/
console.log("splice1");

h = [1, 2, 3, 4, 5];
h.splice(1,2);

console.log(h);

/*10. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice запишите в новый массив элементы [2, 3, 4].*/
console.log("splice2");

h = [1, 2, 3, 4, 5];
j = h.splice(1, 3);

console.log(j);

/*11. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice сделайте из него массив 
[1, 2, 3, 'a', 'b', 'c', 4, 5].*/
console.log("splice3");

h = [1, 2, 3, 4, 5];
h.splice(3,0,'a','b','c');

console.log(h);

/*12. Дан массив [1, 2, 3, 4, 5]. 
С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].*/
console.log("splice4");

h = [1, 2, 3, 4, 5];
h.splice(1,0,'a','b');
h.splice(6,0,'c');
h.splice(8,0,'e');

console.log(h);

/*13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.*/
console.log("sort");

let k = [3,4,1,2,7];

k.sort(function(a,b){
    return a - b;
});
console.log(k);

/*14. Дан массив с числами. 
Создайте новый массив, состоящий из квадратов этих чисел.*/
console.log("forEach1");

h = [1, 2, 3, 4, 5];

let x = h.forEach(function(item){
    return item *= item;
});
console.log(x);

/*15. Дан массив с числами. Найдите сумму этих чисел.*/
console.log("forEach2");

h = [1, 2, 3, 4, 5];


/*16. Дан массив с числами. 
Сделайте из него массив, состоящий из квадратов этих чисел.*/
console.log("map");

h = [1, 2, 3, 4, 5];

let y = h.map(function(item){
    return item *= item;
});
console.log(y);

/*17. Дан массив с числами. Проверьте то, что все элементы 
в массиве больше нуля.*/
console.log("every");

h = [0, 2, 3, 4, 5];
function isBigerThanZero(item){
    return item > 0;
}

console.log(h.every(isBigerThanZero));

/*18. Дан массив с числами. 
Проверьте то, что в нем есть отрицательные элементы.*/
console.log("some");

let u = [7, -4, 22, 5, 2];
function negativeNumbers(item){
    return item < 0;
}
 console.log(u.some(negativeNumbers));

/*19. Дан массив с числами. Найдите сумму этих чисел.*/
console.log("reduce1");

k = [3, 4, 1, 2, 7];

let r = k.reduce(function(a,b){
    return a + b;
});

console.log(r);

/*20. Дан массив с числами. 
Найдите сумму первых N элементов до первого нуля.*/
console.log("reduce2");

let l = [1, 2, 3, 0, 4, 5, 6];


/*25. Дан массив. Найти сумму положительных элементов, 
возведённых в квадрат*/
console.log("цепочка");

l = [1, 2, -3, 0, 4, 5, 6];

sum = 0;
let z = l.filter(function(item){
    return item > 0;
}).map(function(item){
    return item ** 2;
}).reduce(function(sum, item){
    return sum + item;
});
console.log(z);


/*Дан массив объектов.[1,2,3,2,5,4,2,5] 
Оставить только уникальные[1,2,3,5,4]*/

// includes - проверяет наличие
// indexOf - находит индекс элемента в массиве
// [1, 3, 4, 6, 2, 2, 1, 3] => [1, 3, 4, 6, 2] - удалить повторы

let f = [1, 3, 4, 6, 2, 2, 1, 3];

let unique = [];

f.forEach(function (item) {
    if (!unique.includes(item))
        unique.push(item);
})

console.log(unique);

unique = f.filter(function (item, i) {
    return f.indexOf(item) == i;
})

console.log(unique);

