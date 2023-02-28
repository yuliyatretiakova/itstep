let button = document.querySelector("button");
if(button){
    button.addEventListener("click", function(){
        let input1 = document.querySelector("#number1").value;
        let input2 = document.querySelector("#number2").value;
        let div = document.querySelector("div");
        let x = +input1;
        let y = +input2;
        if(x > y){
            div.innerHTML = x;
        }else{
            div.innerHTML = y;
        }

    });
}