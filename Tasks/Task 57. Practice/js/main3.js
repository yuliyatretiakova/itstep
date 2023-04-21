let button = document.querySelector("button");
let p = document.querySelector("p");

button.addEventListener("click", function(){
    if(p.classList.contains("open")){
        p.classList.remove("open");
        this.innerText = "Показать";
    } else {
        p.classList.add("open");
        this.innerText = "Скрыть";
    }
});