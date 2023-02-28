function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let buttons = document.querySelectorAll(".btn_click");

buttons[0].addEventListener("click", function(){
    let r1 = randomNumber(0, 255),
        g1 = randomNumber(0, 255),
        b1 = randomNumber(0, 255);

    let r2 = randomNumber(0, 255),
        g2 = randomNumber(0, 255),
        b2 = randomNumber(0, 255);

    buttons[1].style.backgroundColor = `rgb(${r1},${g1},${b1})`;
    buttons[2].style.backgroundColor = `rgb(${r2},${g2},${b2})`;
});

buttons[1].addEventListener("click", function(){
    let r1 = randomNumber(0, 255),
        g1 = randomNumber(0, 255),
        b1 = randomNumber(0, 255);

    let r2 = randomNumber(0, 255),
        g2 = randomNumber(0, 255),
        b2 = randomNumber(0, 255);

    buttons[0].style.backgroundColor = `rgb(${r1},${g1},${b1})`;
    buttons[2].style.backgroundColor = `rgb(${r2},${g2},${b2})`;
});

buttons[2].addEventListener("click", function(){
    let r1 = randomNumber(0, 255),
        g1 = randomNumber(0, 255),
        b1 = randomNumber(0, 255);

    let r2 = randomNumber(0, 255),
        g2 = randomNumber(0, 255),
        b2 = randomNumber(0, 255);

    buttons[0].style.backgroundColor = `rgb(${r1},${g1},${b1})`;
    buttons[1].style.backgroundColor = `rgb(${r2},${g2},${b2})`;
});