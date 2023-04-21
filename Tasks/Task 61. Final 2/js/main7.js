/*7. Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов получить из второго массива.*/

function isTheSame(a, b){
    let newA = a.toString().toLowerCase().split("").sort().join("");
    let newB = b.toString().toLowerCase().split("").sort().join("");

    if(newA == newB){
        return true;
    }
    return false;
}

console.log(isTheSame("tik", "kit"));
console.log(isTheSame([2,3,4], [4,5,2]));