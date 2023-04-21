function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector(".first").onclick = function(){
    let chess = document.querySelector(".chess");
    if(chess){
        chess.remove();
    }else{
        chess = document.createElement("div");
        chess.classList.add("chess");
    }

    let x = getRandomNumber(1,16);
    document.querySelector(`.box > div:nth-child(${x})`).insertAdjacentElement("afterbegin", chess);
}

document.querySelector(".second").onclick = function(){
    let cells = document.querySelectorAll(".box > div");

    Array.from(cells).forEach(function(cell){
        cell.classList.toggle("white");
        cell.classList.toggle("black");
    });
}

var turn = 0;
document.querySelector(".third").onclick = function(){
    turn += 90;
    document.querySelector(".box").style.transform = `rotate(${turn}deg)`;
}