let button = document.querySelector(".btn");
if(button){
    button.addEventListener("click", function(){

        let input1 = document.querySelector("#number1");
        let x = + input1.value;

        let input2 = document.querySelector("#number2");
        let y = + input2.value;

        let p = document.querySelector("p");
        p.innerHTML = x + y;
    });

}

let button1 = document.querySelector(".btn1");
if(button1){
    button1.addEventListener("click", function(){
        let p1 = document.querySelector(".p1");
        p1.innerHTML = (+p1.innerHTML) + 1;
        
    });
}