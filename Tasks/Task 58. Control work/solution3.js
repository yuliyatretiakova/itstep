/*3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив, состоящих только из уникальных значений параметров функции.*/

function arrayOfArguments(){
    let x = Array.from(arguments);
    let y =[];
    x.forEach((item) => {
        if(!y.includes(item)){
            y.push(item);
        }
    })
    console.log(y);
}
arrayOfArguments(1, 3, 3, 4, 4, 78);
