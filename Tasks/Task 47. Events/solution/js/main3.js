let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let p = document.querySelector("p");
        let x = +p.innerText;
        p.innerText = ++x;
    
    });
}