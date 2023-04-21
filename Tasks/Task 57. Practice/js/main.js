let list = document.querySelector("select");

let options = document.querySelectorAll("option");
Array.from(options).forEach(function(option){
    option.style.color = option.value;
});

list.addEventListener("change",function(){
    let color = this.value;
    let block = document.querySelector(".block");
    block.style.backgroundColor = color;
});