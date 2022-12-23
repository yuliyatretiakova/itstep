var x = 1, y = 2, b = false, s = "Вася", n = null, u = undefined, P = "Петя", p = "петя";

console.log(x < y); //true
console.log(x != b); //true
console.log(x == true); //true
console.log(y == true); //false 2 != 1
console.log(!b); //true
console.log(!x); //false
console.log(s > P); //false
console.log(s > p); //false
console.log(x > s); //false "1" < "Вася" ("1" имеет код 49, "В" имеет код 151)

console.log( 1 || (2 && 0));
console.log(3 && 5 || 2 && 0);

// знак числа
x = -1;
if( x > 0){
    console.log("x - положительное");
} else {
    console.log("x - отрицательное");
}
//x от -5 до 5 <=> x > -5 и x < 5
if((x > -5) && (x < 5)){
    console.log("x от -5 до 5");
}



if( x > 0){
    console.log("x - положительное");
} else if(x < 0){
    console.log("x - отрицательное");
} else {
    console.log("x равно 0");
}

// следующие 2 конструкции эквиваленты
// 1 конструкция
if( x == -5){
    console.log("x = -5");
} else if(x == -4){
    console.log("x = -4");
} else if(x == -3){
    console.log("x = -3");
} else {
    console.log("Черт его знает");
}
// 2 конструкция
switch (x){
    case -5:
        console.log("x = -5");
        break;
    case -4:
        console.log("x = -4");
        break;
    case -3:
        console.log("x = -3");
        break;
    default:
        console.log("Черт его знает");
}   