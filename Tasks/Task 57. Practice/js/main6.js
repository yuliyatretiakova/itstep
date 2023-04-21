let currentPlayer = 1;//1-крестик, 2-нолик
let field = (new Array(9)).fill(0);

let div = document.querySelector(".game__field");

div.addEventListener("click", function(event){
    let cell = event.target;
    if(cell.classList.length != 0){
        return false;
    }
    let index = cell.dataset.n//получение ферибута data-n
    if (currentPlayer ==1){
        cell.classList.add("cross");
        currentPlayer = 2;
        field[index] = 1;
        let result = checkField(1);
        if(result == true){
            alert(`Победил крестик`);
        }
    } else {
        cell.classList.add("circle");
        currentPlayer = 1;
        field[index] = 2;
        let result = checkField(2);
        if(result == true){
            alert (`Победил нолик`);
        }
    }

    let count = field.filter((item) => {
        return item == 0;
    }).length;

    if(count == 0){
        alert (`Ничья`);
    }
});

function checkField(n){
    if (field[0] == n && field[1] == n && field[2] == n){
        return true;
    }
    if (field[3] == n && field[4] == n && field[5] == n) {
        return true;
    }
    if (field[6] == n && field[7] == n && field[8] == n) {
        return true;
    }
    if (field[0] == n && field[3] == n && field[6] == n) {
        return true;
    }
    if (field[1] == n && field[4] == n && field[7] == n) {
        return true;
    }
    if (field[2] == n && field[5] == n && field[8] == n) {
        return true;
    }
    if (field[0] == n && field[4] == n && field[8] == n) {
        return true;
    }
    if (field[2] == n && field[4] == n && field[6] == n) {
        return true;
    }
    return false;
}