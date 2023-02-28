let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let a = document.querySelector("a");
        a.innerHTML = a.href;
        a.onclick  = function(){
            return false; // отменяет стандартное действие браузера при клике на ссылку
        } 
    });
}