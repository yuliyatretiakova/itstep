/*1. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.*/
let num = 234;
let newNum = +(num.toString().split("").reverse().join(""));
console.log(newNum);