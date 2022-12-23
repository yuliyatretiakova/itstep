var hour1 = 18, minutes1 = 30; // дата начала
var hour2 = 21, minutes2 = 20; // дата конца

// вычисление дат в секундах
/*

комментарий

*/
var seconds1 = hour1 * 3600 + minutes1 * 60;
var seconds2 = hour2 * 3600 + minutes2 * 60;
var difference = seconds2 - seconds1;
console.log(difference);

// задача про Банк
var money = 1000, base = 1000, procent = 10;
// сумма после 1 года
money = money + money * procent / 100; // 1100
// сумма после 2 года
money = money + money * procent / 100; // 1210
// сумма после 3 года
money = money + money * procent / 100; // 1331

console.log(money - base);


