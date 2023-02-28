// Example 1

let bigBox = document.querySelector(".big-box");

if(bigBox){
    console.log(bigBox.id);
    bigBox.id = "other-box";
    console.log(bigBox.className); // значение атрибута класс
    console.log(bigBox.classList.add("super-box"));
    console.log(bigBox.children.length);
    console.log(bigBox.childNodes.length);
    console.log(bigBox.firstElementChild.innerText);
    console.log(bigBox.firstChild.nodeValue, bigBox.firstChild.data, bigBox.firstChild);
    console.log(bigBox.firstChild.nextSibling.innerText);
    console.log(bigBox.firstElementChild.nextElementSibling.innerText);
}

// Example 2
let smallBoxes = document.querySelectorAll(".small-box");
let thirdSmallBox;
if(smallBoxes){
    console.log(smallBoxes.length);
    thirdSmallBox = smallBoxes[2];
    console.log(thirdSmallBox.innerHTML);
    thirdSmallBox.innerHTML = `<b>${thirdSmallBox.innerHTML}</b>`; //<b>3</b>
    console.log(thirdSmallBox.innerHTML, thirdSmallBox.innerText);
    Array.from(smallBoxes).forEach(function(box, index){ //Array.from(smallBoxes) - преобразование в массив
        console.log(`Box #${box.innerText}`);
        console.log(box.style.fontSize); // пусто
        let styles = getComputedStyle(box);
        console.log("Font-size:", parseInt(styles.fontSize, 10)); // 14px
        box.style.color = "#f0f";
        box.style.fontSize = (14 + index * 3) + "px";
    })

}

// Example 3
smallBoxes = document.querySelectorAll(".small-box");
if(smallBoxes){
    console.log(smallBoxes.length); //5
}
smallBoxes = bigBox.querySelectorAll(".small-box");
if(smallBoxes){
    console.log(smallBoxes.length); //4
}

// Example 4
thirdSmallBox = bigBox.querySelector(":nth-child(3)");
if(thirdSmallBox){
    let x = thirdSmallBox.innerText;
    console.log(x); // 3
}

// Example 5
// добавить нулевой small-box в big-box
let newBox = "<div class='small-box'>0</div>";
bigBox.insertAdjacentHTML('afterbegin', newBox);
newBox.title = "Подсказка";
console.log(typeof newBox);

// Example 6
// добавить 4.5 small-box в конец big-box
let newSmallBox = document.createElement("div");
newSmallBox.classList.add("small-box");
newSmallBox.innerHTML = "4.5";
//<div class='small-box'>4.5</div>
bigBox.insertAdjacentElement("beforeend", newSmallBox);
newSmallBox.title = "Подсказка";
console.log(typeof newSmallBox);

// Example 7
// удаление элемента (в нашем случае с номером 4)
thirdSmallBox.nextElementSibling.remove();