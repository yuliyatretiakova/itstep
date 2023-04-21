//функция получает на входе 2 строки с датами в формате "д.м.г". сравнить, если 1>2 вернуть 1, если 1=2 вернуть 0, если 1<2 вернуть -1
console.log("Task 1");
function dateСomparison(date1, date2){
    let a = date1.split(".").map((item) => parseInt(item));
    let b = date2.split(".").map((item) => parseInt(item));
    console.log(a,b);
    if ((a[2] > b[2]) || ((a[2] == b[2]) && (a[1] > b[1])) || ((a[2] == b[2]) && (a[1] == b[1]) && (a[0] > b[0]))){
        return 1;
    } else if ((a[2] == b[2]) && (a[1] == b[1]) && (a[0] == b[0])){
        return 0;
    } else {
        return -1;
    }
}
console.log(dateСomparison("05.10.2011", "02.10.2011"));
