let button = document.querySelector("button");
button.addEventListener("click", function(){
    let time1 = document.querySelector("#time1").value;
    time1 = time1.split(":").map((item) => parseInt(item));
    let minutes1 = (time1[0] * 60) + time1[1];

    let time2 = document.querySelector("#time2").value;
    time2 = time2.split(":").map((item) => parseInt(item));
    let minutes2 = (time2[0] * 60) + time2[1];

    let quotient = minutes2 - minutes1;//частное
    let resultMinutes = quotient % 60;
    let resultHours = (quotient - resultMinutes) / 60;

    let result = document.querySelector(".result");
    result.innerText = `${resultHours}:${resultMinutes}`;
});