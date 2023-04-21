document.querySelector("div").onclick = function(event){
    let button = event.target;

    if(button.tagName != "BUTTON"){
        return false;
    }

    let p = document.querySelector("p");

    p.innerHTML += button.innerText;
}