document.querySelector(".box").onmouseover = function(event){
    event.target.classList.add("bg-blue");
}

document.querySelector(".box").onmouseout = function (event) {
    event.target.classList.remove("bg-blue");
}
let box = document.querySelector(".box");

box.addEventListener("click", function(event){
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width/2}px`;
    this.style.height = `${height/2}px`;
});

box.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    let styles = getComputedStyle(this);
    let width = parseInt(styles.width);
    let height = parseInt(styles.height);

    this.style.width = `${width*2}px`;
    this.style.height = `${height*2}px`;
});