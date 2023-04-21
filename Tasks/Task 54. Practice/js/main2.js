let ul = document.querySelector("ul");

ul.addEventListener("click", function(event){
    if (event.target.tagName != "LI")//если клик не попал на тэг с именем li
        return;//event.target = li
    let liRed = this.querySelector(".color-red");//this == ul
    if(liRed){
        liRed.classList.remove("color-red");
    }

    event.target.classList.add("color-red");
});

ul.addEventListener("dblclick", function(event){

    if(event.target.tagName != "LI")
        return;
    let li = document.createElement("li");
    li.innerHTML = event.target.innerHTML;
    this.insertAdjacentElement("beforeend", li);
});

ul.addEventListener("mouseover", function(event){
    if (event.target.tagName != "LI")
        return;
    event.target.innerHTML = `<b>${event.target.innerHTML}</b>`
});

ul.addEventListener("mouseout", function(event){
    if (event.target.tagName != "LI")
        return;
    event.target.innerHTML = event.target.firstElementChild.innerHTML;
});