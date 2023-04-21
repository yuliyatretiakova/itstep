let blocks = document.querySelector(".blocks");
blocks.addEventListener("keyup", function(event){
    if(event.key == "Digit0"){
        this.querySelector(".block0").style.backgroundColor = "red";
    }
})