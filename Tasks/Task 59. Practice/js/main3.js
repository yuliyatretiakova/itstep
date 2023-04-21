let ul = document.querySelector("ul");
/*ul.onmouseover = function(event){
    if(event.target == "LI"){
        event.target.classList.add("bg-red");
    }
}*/
ul.addEventListener("mouseover", function(event){
    let li = event.target;
    if((li.tagName == "LI") && (+li.innerText % 2 == 0)){
        li.classList.add("bg-red");
    } else if ((li.tagName == "LI") && (+li.innerText % 2 != 0)){
        li.classList.add("bg-blue"); 
    }
});

ul.addEventListener("mouseout", function (event) {
    let li = event.target;
    if ((li.tagName == "LI") && (+li.innerText % 2 == 0)) {
        li.classList.remove("bg-red");
    } else if ((li.tagName == "LI") && (+li.innerText % 2 != 0)) {
        li.classList.remove("bg-blue");
    }
});
