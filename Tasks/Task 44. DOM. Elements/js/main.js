let firstElement = document.querySelector("#first-element");

if(firstElement){
    firstElement.classList.add("www");
    firstElement.classList.remove("www");
    if(firstElement.classList.contains("www")){
        console.log("Есть класс www");
    } else{
        console.log("Нет класса www");
    }

    firstElement.classList.toggle("www");

    console.log(firstElement.classList.length);

    for(let i = 0; i < firstElement.classList.length; i++){
        console.log(firstElement.classList.item(i));
    }

    //или

    for(const item of firstElement.classList){
        console.log(item);
    }

    firstElement.style.color = "#f00";
    firstElement.style.fontSize = "30px";
    firstElement.style.border = "1px solid #000";

    console.log(firstElement.tagName.toLowerCase());
    
    firstElement.insertAdjacentHTML("beforeend", "<span>мой любимый спан</span>");// вставка строкой

    let block = ["createElement", "appendChild", "insertBefore"];
    let out = "<ul>";
    block.forEach(function(item){
        out += `<li>${item}</li>`;
    });
    out += "</ul>";

    firstElement.insertAdjacentHTML("beforeend", out);

    //вставка объектом
    let div = document.createElement("div");
    div.classList.add("neighbor");
    div.innerText = "ещё один сосед";

    firstElement.insertAdjacentElement("beforebegin", div);
}

let secondElement = document.querySelector("#second-element");

if(secondElement){
    let span = "<span>!!!</span>";
    secondElement.insertAdjacentHTML("afterbegin", span);
    secondElement.insertAdjacentHTML("afterend", span);
    secondElement.insertAdjacentHTML("beforebegin", span);
    secondElement.insertAdjacentHTML("beforeend", span);
}

let thirdElement = document.querySelector("#third-element");

if(thirdElement){
    if(thirdElement.firstElementChild){
        thirdElement.firstElementChild.style.color = "#f00";
    }

    if(thirdElement.lastElementChild){
        thirdElement.lastElementChild.style.color = "#f00";
    }

    Array.from(thirdElement.children).forEach(function(item){
        item.insertAdjacentText("beforeend", "!");
    });
}

let fourthElement = document.querySelector("#fourth-element");

if(fourthElement){
    if(fourthElement.previousElementSibling){
        fourthElement.previousElementSibling.insertAdjacentText("beforeend", "!");
    }

    if(fourthElement.nextElementSibling){
        fourthElement.nextElementSibling.insertAdjacentText("beforeend", "!");
    }

    if(fourthElement.nextElementSibling.nextElementSibling){
        fourthElement.nextElementSibling.nextElementSibling.insertAdjacentText("beforeend", "!");
    }
}

let fifthElement = document.querySelector("#fifth-element");

if(fifthElement){
    if(fifthElement.parentElement){
        fifthElement.parentElement.style.color = "#00f";
    }

    if(fifthElement.parentElement.parentElement){
        fifthElement.parentElement.parentElement.style.color ="#ff0";
    }
}