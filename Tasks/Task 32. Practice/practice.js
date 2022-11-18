let x;
function squareANumber (x){
    x *= x;
    return x;
}

let a, b, c;
function subtractionDivision (a,b,c){
    let result = (a - b) / c;
    return result;
}

let d;
function dayOfTheWeek (d){
    switch (d){
        case 1:
            return "понедельник";
            break;
        case 2:
            return "вторник";
            break;
        case 3:
            return "среда";
            break;
        case 4:
            return "четверг";
            break;
        case 5:
            return "пятница";
            break;
        case 6:
            return "суббота";
            break;
        case 7:
            return "воскресенье";
            break;
        default:
            return "нет такого дня недели"
    }
}

function compareOfNumbers (a,b){
    if(a == b){
        return true;
    }else {
        return false;
    }
}

function comparingANumberWithTen (a,b){
    let c = a + b;
    if (c > 10){
        return true;
    } else {
        return false;
    }
}

function positiveOrNegativeNumber (a){
    if(a < 0) {
        return true;
    } else if (a > 0) {
        return false;
    }
}

function evenOrOddNumber (a){
    if (a % 2 == 0){
        return true;
    } else {
        return false;
    }
}


function arrayOfDividers(n){
    let e = [];
    let j = 0;

    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            e[j] = i;
            j++;
        }
    }
    return e;

}

/*1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.*/
console.log("Task 1");

console.log(squareANumber(7));

/*2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.*/
console.log("Task 2");

console.log(subtractionDivision(12,7,5));

/*3. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.*/
console.log("Task 3");

console.log(dayOfTheWeek(123));

/*4. Сделайте функцию, которая параметрами принимает 2 числа. 
Если эти числа равны - пусть функция вернет true, а если не равны - false.*/
console.log("Task 4");

console.log(compareOfNumbers(2,1));

/*5. Сделайте функцию, которая параметрами принимает 2 числа. 
Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/
console.log("Task 5");

console.log(comparingANumberWithTen(2,3));

/*6. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. 
Если отрицательное - пусть функция вернет true, а если нет - false.*/
console.log("Task 6");

console.log(positiveOrNegativeNumber(-2345));

/*7. Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. 
Если четное - пусть функция возвращает true, если нечетное - false.*/
console.log("Task 7");

console.log(evenOrOddNumber(3764));

/*8. Сделайте функцию, которая параметром принимает число и возвращает массив его делителей*/
console.log("Task 8");

console.log(arrayOfDividers(57));