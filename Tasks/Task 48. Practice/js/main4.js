let button = document.querySelector("button");
if(button){
    button.addEventListener("click", function(){
        let input1 = document.querySelector("#number1").value;
        let input2 = document.querySelector("#number2").value;
        let div = document.querySelector("div");
        let x = +input1;
        let y = +input2;
        let sum = x + y;
        let difference = x - y;
        let product = x * y;
        let quotient;
        if(y == 0){
            quotient = "Деление на 0";
        }else{
            quotient = x /y;
        }

        div.innerHTML = `Сумма ${sum}, разность ${difference}, произведение ${product}, частное ${quotient}`;

    });
}