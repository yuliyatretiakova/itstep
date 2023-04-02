/*2. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.*/

function printIndex(a) {
    let index = 0;

    let timer = setInterval(function () {
        console.log(index);
        index++;
        if (index == a.length) {
            clearInterval(timer);
        }
    }, 3000);
}

let o = [1, 2, 3, 4, 5];
printIndex(o);