/*1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.*/

function compare(a,b){
    let newA = a.toLowerCase().split("").sort().join("");
    let newB = b.toLowerCase().split("").sort().join("");
    if(newA == newB){
        return true;
    }else{
        return false;
    }
}

console.log(compare("tik", "kot"));