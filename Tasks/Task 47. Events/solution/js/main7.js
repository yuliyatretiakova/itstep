let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let x = document.querySelector("input").value;
        if(isNaN(+x) || x === ""){
            document.querySelector("p").innerText = "Не число";
        } else {
            document.querySelector("p").innerText = "Число";
        }
        
    });
}