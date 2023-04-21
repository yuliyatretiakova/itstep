let field = document.querySelector("input");
field.addEventListener("keyup", function(){
let text = document.querySelector("p");
text.innerText = this.value;
});

field.addEventListener("keypress", function(event){
    if(event.key == " "){
        event.preventDefault();
    }
});