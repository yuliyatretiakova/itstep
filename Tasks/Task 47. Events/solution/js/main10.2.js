function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomColor(){
    let r = randomNumber(0, 255),
        g = randomNumber(0, 255),
        b = randomNumber(0, 255);

    return `rgb(${r},${g},${b})`;
}
let buttons = document.querySelectorAll(".btn_click");

Array.from(buttons).forEach((button, index) => {

    button.addEventListener("click", function(){
     
        if(index == 0){
            buttons[1].style.backgroundColor = randomColor();
            buttons[2].style.backgroundColor = randomColor();            
        }
        if(index == 1){
            buttons[0].style.backgroundColor = randomColor();
            buttons[2].style.backgroundColor = randomColor();            
        }
        if(index == 2){
            buttons[0].style.backgroundColor = randomColor();
            buttons[1].style.backgroundColor = randomColor();            
        }
    })
})