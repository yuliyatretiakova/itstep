/*5. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания.*/
function getDiffDate(date1, date2) {
    let a = date1.split(".").map((item) => +item);
    let b = date2.split(".").map((item) => +item);

    if ((a[2] > b[2]) || ((a[2] == b[2]) && (a[1] > b[1])) || ((a[2] == b[2]) && a[1] == b[1] && a[0] > b[0])) {
        return 1;
    }

    if (a[2] == b[2] && a[1] == b[1] && a[0] == b[0]) {
        return 0;
    }

    return -1;
}

let array1 = ["28.03.2023", "28.03.2022", "28.03.2024", "28.03.2020"];

array1.sort(getDiffDate);
console.log(array1);
