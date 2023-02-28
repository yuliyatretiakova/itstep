let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let input1 = document.querySelector("#number1");
        let input2 = document.querySelector("#number2");
        let temp = input1.value;
        input1.value = input2.value;
        input2.value = temp;
        
    });
}