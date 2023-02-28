let article = document.createElement("article");
article.classList.add("news__item");
document.body.insertAdjacentElement("afterbegin", article);

let a = document.createElement("a");
a.href = "/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/";
article.insertAdjacentElement("afterbegin", a);

let childDiv1 = document.createElement("div");
childDiv1.classList.add("news__img");
a.insertAdjacentElement("afterbegin", childDiv1);

let childDiv2 = document.createElement("div");
childDiv2.classList.add("news__desciption");
a.insertAdjacentElement("beforeend", childDiv2);

let img = document.createElement("img");
img.src = "/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp";
img.alt ="We offer a new fertilizer – potassium salt 60% NOD";
childDiv1.insertAdjacentElement("afterbegin", img);

let time = document.createElement("time");
time.innerText = "06.01.2023";
childDiv1.insertAdjacentElement("beforeend", time);

let grandchildDiv1 = document.createElement("div");
grandchildDiv1.classList.add("news__title");
childDiv2.insertAdjacentElement("afterbegin",grandchildDiv1);

let h4 = document.createElement("h4");
h4.innerText = "We offer a new fertilizer – potassium salt 60% NOD";
grandchildDiv1.insertAdjacentElement("afterbegin", h4);

let grandchildDiv2 = document.createElement("div");
grandchildDiv2.classList.add("news__text");
childDiv2.insertAdjacentElement("beforeend", grandchildDiv2);

let p = document.createElement("p");
p.innerText = "We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.";
grandchildDiv2.insertAdjacentElement("afterbegin", p);

let grandchildDiv3 = document.createElement("div");
grandchildDiv3.classList.add("news__more");
childDiv2.insertAdjacentElement("beforeend", grandchildDiv3);

let span = document.createElement("span");
span.innerText = "more";
grandchildDiv3.insertAdjacentElement("afterbegin", span);

let task2 = document.querySelectorAll("span");
if(task2.length){
    Array.from(task2).forEach((item) => {
        item.outerHTML = item.innerHTML;
    });
}

let task3 = document.querySelector("time");
if(task3){
    task3.style.backgroundColor = "#f00";
    task3.style.color = "#fff";
    task3.style.padding = "25px";
}

let task4 = document.querySelector("h4");
if(task4){
    let styles = getComputedStyle(task4);
    let fontSize = parseInt(styles.fontSize, 10);
    task4.style.fontSize = `${fontSize + 2}px`;
}

let task5 = document.querySelector("a");
let href;
if(task5){
    href = a.href;
    task5.outerHTML = task5.innerHTML;
}

let task6 = document.querySelector(".news__more");
if(task6){
    task6.innerHTML = `<a>${task6.innerHTML}</a>`;
    task6.firstElementChild.href = href;
}

let task7 = task4.innerHTML;
task6.firstElementChild.title = task7;

let task8 = document.querySelector("p");
if(task8){
    task8.outerHTML = `<b>${task8.innerHTML}</b>`;
}

task4 = document.querySelector("h4");
console.log(task4);
task4.style.fontWeight = "500";
task4.style.lineHeight = "150%";
task4.style.textTransform = "uppercase";
task4.style.color = "#000";

