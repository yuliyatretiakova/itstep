let firstElement = document.querySelector("#first-element");
if(firstElement){
    if(firstElement.previousElementSibling){
        firstElement.previousElementSibling.innerHTML = "Я хороший сосед";
    }

    if (firstElement.previousElementSibling.previousElementSibling) {
        firstElement.previousElementSibling.previousElementSibling.innerHTML = "Я хороший сосед";
    }

    if(firstElement.nextElementSibling){
        firstElement.nextElementSibling.innerHTML = "Я хороший сосед";
    }

    if (firstElement.nextElementSibling.nextElementSibling) {
        firstElement.nextElementSibling.nextElementSibling.innerHTML = "Я хороший сосед";
    }

}

let neighbors = document.querySelectorAll(".first-section .neighbor");
console.log(neighbors);

if(neighbors.length){
    Array.from(neighbors).forEach(function (item, index) {
        item.innerHTML = `Я хороший сосед № ${index + 1}`;
    });

    Array.from(neighbors).forEach(function (item) {
        item.innerHTML = `<span>${item.innerHTML}</span>`;
    });

    Array.from(neighbors).forEach(function(item){
        item.innerHTML = `<b>${item.innerText}</b>`;
    });
}

let fourthNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");

if(fourthNeighbor){
    fourthNeighbor.innerText = "Я последний хороший сосед";
}

let secondElement = document.querySelector("#second-element");

if(secondElement){
    let list = ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4", "Пункт 5", "Пункт 6", "Пункт 7", "Пункт 8", "Пункт 9", "Пункт 10"];
    let out = "<ul>";
    list.forEach(function(item){
        out += `<li>${item}</li>`;
    });
    out += "</ul>";

    secondElement.insertAdjacentHTML("beforeend", out);

    let points = secondElement.querySelectorAll("ul > li");
    console.log(points);

    if(points.length){
        Array.from(points).forEach(function(item, index){
            if(index % 2 != 0){
                item.style.color = "#f00";
            }
        });

        Array.from(points).forEach(function(item, index){
            if (index % 2 == 0){
                item.classList.add("odd-element");
            }
        });

        Array.from(points).forEach(function(item, index){
            if ((index % 3 == 2) && (item.classList.contains("odd-element"))){
                item.style.fontSize = (14 * 2) + "px";
            }
            
        });
    }
}

let thirdElement = document.querySelector("#third-element");
if(thirdElement){
    let allB = thirdElement.querySelectorAll("b");
    if(allB.length){
        Array.from(allB).forEach(function (item) {
            item.outerHTML = `<strong>${item.innerHTML}</strong>`;
        });
    }
    
    let strongs = thirdElement.querySelectorAll("strong");
    if(strongs.length){
        Array.from(strongs).forEach((item) =>{
            item.innerHTML = item.innerText;
        });

        Array.from(strongs).forEach((item) =>{
            let words = item.innerText.split(" ");

            let newInnerHTML = words.map((item) => {
               return `<span>${item}</span>`;
            }).join(" ");

            item.innerHTML = newInnerHTML;
        });
    }
}

let fourthElement = document.querySelector("#fourth-element");
if(fourthElement){
    if(fourthElement.parentElement){
        let divs = fourthElement.parentElement.querySelectorAll("div");
        if(divs.length){
            Array.from(divs).forEach((item) => {
                console.log(item.innerHTML);
            });

            let reverseDivs = [];
            Array.from(divs).forEach((item) => {
                reverseDivs.unshift(item.innerHTML);
            });

            Array.from(divs).forEach((item, index) => {
                item.innerHTML = reverseDivs[index];
            });

            divs[1].remove();

            let fifthNeighbor = document.createElement("div");
            fifthNeighbor.classList.add(".neighbor");
            fifthNeighbor.classList.add(".fifth-neighbor");
            fifthNeighbor.innerHTML = "Я пятый сосед";
            divs[0].insertAdjacentElement("afterend", fifthNeighbor);
            fifthNeighbor.style.border = "1px solid #000";
            fifthNeighbor.style.padding = "10px";
            fifthNeighbor.style.backgroundColor = "#f0f";
        }
         
    }
    
}

let fifthElement = document.querySelector("#fifth-element");
if(fifthElement){
    if(fifthElement.parentElement){
        let neighbor2 = document.createElement("div");
        neighbor2.classList.add("second");
        neighbor2.innerHTML = "2";
        fifthElement.parentElement.insertAdjacentElement("afterbegin", neighbor2);

        let neighbor1 = document.createElement("div");
        neighbor1.classList.add("first");
        neighbor1.innerHTML = "1";
        fifthElement.parentElement.insertAdjacentElement("afterbegin", neighbor1);
        
        let neighbor3 = document.createElement("div");
        neighbor3.classList.add("third");
        neighbor3.innerHTML = "3";
        fifthElement.parentElement.insertAdjacentElement("beforeend", neighbor3);

        let neighbor4 = document.createElement("div");
        neighbor4.classList.add("fours");
        neighbor4.innerHTML = "4";
        fifthElement.parentElement.insertAdjacentElement("beforeend", neighbor4);
    }

    let theFirstDiv = document.querySelector(".first");
    if (theFirstDiv) {
        let week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        let catalog = "<ol>";
        week.forEach((item) => {
            catalog += `<li>${item}</li>`;
        });
        catalog += "</ol>";

        theFirstDiv.insertAdjacentHTML("beforeend", catalog);
        
        let sunday = theFirstDiv.querySelector("ol > li:last-child");
        if(sunday){
            console.log(sunday.innerHTML);

            sunday.style.color = "#f00";

            if(sunday.previousSibling){
                console.log(sunday.previousSibling.innerHTML);
                
                sunday.previousSibling.style.color = "#f00";
            }
        }
    }

    let theSecondDiv = document.querySelector(".second");
    if(theSecondDiv){
        let theFirstSpan = document.createElement("span");
        theFirstSpan.classList.add("span1");
        theFirstSpan.innerHTML = "Привет!";

        theSecondDiv.insertAdjacentElement("afterbegin", theFirstSpan);

        let length1 = theFirstSpan.innerHTML.split("").length;
        theFirstSpan.insertAdjacentText("beforeend", `(${length1})`);

        let theSecondSpan = document.createElement("span");
        theSecondSpan.classList.add("span2");
        theSecondSpan.innerHTML = "Пока!";

        theSecondDiv.insertAdjacentElement("beforeend", theSecondSpan);

        let length2 = theSecondSpan.innerHTML.split("").length;
        theSecondSpan.insertAdjacentText("beforeend", `(${length2})`);
    }
    
    let theThirdDiv = document.querySelector(".third");
    if(theThirdDiv){
        let link = document.createElement("a");
        link.setAttribute("href", "https://www.google.ru/");
        link.innerHTML = "3";
        
        theThirdDiv.insertAdjacentElement("afterbegin", link);

        theThirdDiv.style.border = "1px solid #000";
    }

    let theFoursDiv = document.querySelector(".fours");
    if(theFoursDiv){
        let article = document.createElement("article");
        article.classList.add("news");
        article.classList.add("good-news");
        article.innerHTML = "4";
        theFoursDiv.insertAdjacentElement("beforebegin", article);
        
    }
}



