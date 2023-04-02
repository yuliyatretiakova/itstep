/*7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений. */

function uniq(a, b) {
    a.forEach(function (item) {
        if ((b.includes(item) && (!d.includes(item)))) {
            d.push(item);
        }
    });
    return d;
}

let a = [1, 2, 3, 4, 5, 2, 3];
let b = [2, 3, 4, 6, 7, 2, 3];
let d = [];

uniq(a, b);
console.log(d);