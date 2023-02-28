let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let str = document.querySelector("input").value;

        let pattern = "0123456789";

        str = str.split("").filter((letter) => {
            return !pattern.includes(letter); //return pattern.indexOf(letter) == -1; // return typeof +x != "number" 
        }).join("");

        document.querySelector("input").value = str;
    });
}