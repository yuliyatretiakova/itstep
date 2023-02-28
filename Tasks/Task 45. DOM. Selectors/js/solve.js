//let neighbors = document.querySelectorAll(".first-section .neighbor");

let firstElement = document.querySelector("#first-element");//поиск первого элемента по id и запись его в объявленную переменную
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");//поиск всех элементов с классом ".neighbor" у родителя первого элемента и запись их в объявленную переменную
if(neighbors.length){ // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = "Я хороший сосед";
    });//преобразование данных строки neighbors в массив, проход методом forEach по полученному массиву с применением функции, которая присваивает элементу значение "Я хороший сосед"(заменяет уже имеющийся текст);

    Array.from(neighbors).forEach(function(element, index){
        element.innerHTML = `Я хороший сосед №${index+1}`;
    });//преобразование данных строки neighbors в массив, проход методом forEach по полученному массиву с применением функции, которая присваивает элементу значение "Я хороший сосед"(заменяет уже имеющийся текст с учётом индекса элемента в массиве-добавляет номер);

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });//преобразование данных строки neighbors в массив, проход методом forEach по полученному массиву с применением функции, которая заменяет уже имеющийся текст, на текст, "обёрнутый в тег <span>";

    Array.from(neighbors).forEach(function(element){
        element.innerHTML = `<b>${element.innerText}</b>`;
    });//тоже самое, только перезаписывает строку с "обёрткой" тегом "b"
}
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");//поиск в родительском элементе (первого элемента) элемента с классом ".fourth-neighbor" и присвоение его объявленной переменной 
if(lastNeighbor){//проверка найденного элемента (если он найден, выполняется код ниже)
    if(lastNeighbor.firstElementChild){//проверка наличия у найденного элемента первого потомка
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";//перезаписывание содержимого первого потомка последнего соседа при помощи метода innerHTML
    }
}

let secondElement = document.querySelector("#second-element");//поиск второго элемента по id и запись его в объявленную переменную
if(secondElement){// проверка: если элемент найден - выполняется код ниже
    /*let out = "<ul>";
    for(let i = 1; i <= 10; i++){
        out += `<li>Пункт ${i}</li>`;
    }
    out += "</ul>";
    secondElement.insertAdjacentHTML("afterbegin", out);*/
    // добавление маркированного списка после "начала" второго элемента в виде строки методом insertAdjacentHTML


    let ul = document.createElement("ul");// создание элемента "ul"
    secondElement.insertAdjacentElement("afterbegin", ul);//добавление элемента "ul" после начала второго элемента методом insertAdjacentElement
    for (let i = 1; i <= 10; i++) {//заполнение маркированного списка "ul" при помощи цикла for
        let li = document.createElement("li");//создание элемента "li"
        li.innerHTML = `Пункт ${i}`;//заполнение элемента(тега li) содержимым при помощи метода innerHTML
        ul.insertAdjacentElement("beforeend", li);//вставка элементов li в элемент ul "перед концом" методом insertAdjacentElement
    }
    //поиск всех чётных (even или 2n) элементов списка li
    let evenElements = ul.querySelectorAll("li:nth-child(2n)"); // ul.querySelectorAll("li:nth-child(even)");
    if (evenElements.length) {//проверка наличия списка элементов при помощи метода length, т.к. метод querySelectorAll возвращает список в любом случае, даже пустой
        Array.from(evenElements).forEach(function(item){
            item.style.color = "#f00";
        });//преобразование строки из чётных элементов в массив методом Array.from, прохождение по массиву методом forEach и изменение цвета шрифта методом style.color
    }

    //поиск всех нечётных (odd или 2n+1) элементов списка li
    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)");
    if (oddElements.length) {//проверка наличия списка элементов при помощи метода length, т.к. метод querySelectorAll возвращает список в любом случае, даже пустой
        Array.from(oddElements).forEach((item) => {
            item.classList.add("odd-element");
        });//преобразование строки из нечётных элементов в массив методом Array.from, прохождение по массиву методом forEach и добавление элементам класса "odd-element"
    }

    //поиск всех элементов списка li кратных 3 (3n)
    let elements = ul.querySelectorAll("li:nth-child(3n)");
    if (elements.length) {//проверка наличия списка элементов при помощи метода length
        Array.from(elements).forEach((item) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
            if (item.classList.contains("odd-element")) {//проверка выполнения условия наличия у элемента класса "odd-element" методом classList.contains 
                let styles = getComputedStyle(item);//получение стилей элементов в едином формате методом getComputedStyle
                let fontSize = parseInt(styles.fontSize, 10);//получение числового значения размера шрифта методом parseInt для переменной styles в десятичной системе счисления
                item.style.fontSize = `${fontSize * 2}px`;// увеличение полученного выше значения в 2 раза с присвоением размерности в px
            }
        })
    }
}

//поиск третьего элемента по id и запись его в объявленную переменную
let thirdElement = document.querySelector("#third-element");
if (thirdElement) {// проверка: если элемент найден - выполняется код ниже
    let bs = thirdElement.querySelectorAll("b");//поиск всех элементов под тегом "b" и запись их в виде строки в объявленную переменную
    if (bs.length) {//проверка наличия списка элементов при помощи метода length
        Array.from(bs).forEach((item) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
            item.outerHTML = `<strong>${item.innerHTML}</strong>`;//замена тегов "b" на теги "strong" путём перезаписи строки
        });
    }

    let strongs = thirdElement.querySelectorAll("strong");//получение строки из всех элементов под тегами "strong"
    if (strongs.length) {//проверка наличия списка элементов при помощи метода length
        Array.from(strongs).forEach((item) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
            item.innerHTML = item.innerText;// перезапись строк без вложенных тегов
        });

        Array.from(strongs).forEach((item) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
            let words = item.innerText.split(" ");//преобразование строки (массива) "strongs" в массив отдельных слов "words" методом split с разделением по знаку пробела " "

            //прохождение методом map по массиву words (вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции)
            let newInnerHTML = words.map((word) => {
                return `<span>${word}</span>`// возвращает все элементы, обёрнутыми в тег "span"
            }).join(" ");//метод join "сшивает" массив из отдельных слов в строку через символ пробела " "

            item.innerHTML = newInnerHTML;// присвоение нового внутреннего содержимого (строка, где все слова обёрнуты тегом "span") исходным элементам
        });
    }
}
//поиск четвёртого элемента по id и запись его в объявленную переменную
let fourthElement = document.querySelector("#fourth-element");
if (fourthElement) {// проверка: если элемент найден - выполняется код ниже
    if (fourthElement.parentElement) {// проверка наличия родительского элемента: если элемент найден - выполняется код ниже
        //поиск всех элементов под тегами "div" у родителя 4-го элемента
        let divs = fourthElement.parentElement.querySelectorAll("div");
        if (divs.length) {//проверка наличия списка элементов при помощи метода length
            Array.from(divs).forEach((div) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
                console.log(div.innerHTML);//выведение в консоль "внутреннего содержимого" элементов под тегами "div"
            });

            let reverseDivs = [];//объявление переменной для пустого массива
            Array.from(divs).forEach((item) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
                reverseDivs.unshift(item.innerHTML);//заполнение пустого массива методом unshift (добавляет элементы в начало)
            });

            Array.from(divs).forEach((div, index) => {//преобразование строки из элементов в массив методом Array.from, прохождение по массиву методом forEach
                div.innerHTML = reverseDivs[index];//присвоение значений массива reverseDivs (с учётом индексов) массиву div (значения записываются в обратном порядке от исходного)
            });

            divs[1].remove();// удаление элемента со значением "третий сосед" (элемент с индексом 1 с учётом реверса выше) методом remove
            // аналог
            //fourthElement.parentElement.firstElementChild.nextElementSibling.remove();

            //создание элемента в теге "div"
            let fifthNeighbor = document.createElement("div");
            fifthNeighbor.classList.add("neighbor");//добавление элементу класса "neighbor"
            fifthNeighbor.classList.add("fifth-neighbor");//добавление элементу класса "fifth-neighbor"
            fifthNeighbor.innerHTML = "Я пятый сосед";//добавление элементу "внутреннего содержимого" ввиде текста
            divs[0].insertAdjacentElement("afterend", fifthNeighbor); // divs[0] = fourthElement.parentElement.firstElementChild
            //добавление в массив divs созданного элемента в позицию с индексом "0" методом insertAdjacentElement
            
            //стилизация добавленного элемента методом style (добавление элементу границы, отступов и заливки фона)
            fifthNeighbor.style.border = "1px solid #000";
            fifthNeighbor.style.padding = "10px";
            fifthNeighbor.style.backgroundColor = "#ff0";
        }
    }
}