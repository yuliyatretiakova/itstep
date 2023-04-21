let input = document.querySelector("#name");
input.addEventListener("focus", function(){
    this.style.backgroundColor = "#00f";
});

input.addEventListener("blur", function () {
    this.style.backgroundColor = "#fff";
});