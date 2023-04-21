/*9. Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.*/

let date = "31.12.1995";

date = date.split(".").reverse().join(".");
console.log(date);

let inTenDays = new Date(date);
inTenDays.setDate(inTenDays.getDate() + 10);

console.log(inTenDays.toLocaleDateString());