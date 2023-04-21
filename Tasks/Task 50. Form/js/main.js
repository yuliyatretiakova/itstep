let form = document.querySelector("#reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault();

    let errors = document.querySelectorAll(".error-text");

    if(errors.length){
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        });
    }

    let hasError = false;

    let nameInput = document.querySelector("#name");
    let emailInput = document.querySelector("#email");
    let phoneInput = document.querySelector("#phone");
    let educationInput = document.querySelector("#education");
    let aboutInput = document.querySelector("#about");
    let avatarInput = document.querySelector("#avatar");

    let fields = [nameInput, emailInput, phoneInput, educationInput, aboutInput, avatarInput];

    fields.forEach((field) => {
        if(field.value == ""){
            let span = document.createElement("span");
            span.classList.add("error-text");
            span.innerText = "Заполните поле";
            field.insertAdjacentElement("afterend", span);
            field.parentElement.classList.add("error");
            hasError = true;
        }
    });

    let sexs = ["sex-m", "sex-f"];

    let checked = sexs.some((radioId) => {
        return document.querySelector("#" + radioId).checked;//document.querySelector("#"+radioId) - input
    });

    if(!checked){
        let span = document.createElement("span");
        span.className = "error-text";//не подойдёт, если у элемента уже есть класс, тогда span.classList.add("error-text");
        span.innerText = "Выберете пол";
        document.querySelector("#sex-f").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    let hobbies = ["hobby-1", "hobby-2", "hobby-3"];

    checked = hobbies.some((checkboxId) => {
        return document.querySelector("#" + checkboxId).checked;//document.querySelector("#"+checkbox) - input
    });

    if(!checked){
        let span = document.createElement("span");
        span.classList.add("error-text");
        span.innerText = "Выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if(!hasError){
        let div = document.querySelector(".result");

        div.innerHTML += `Имя: ${nameInput.value}<br>`;
        div.innerHTML += `Email: ${emailInput.value}<br>`;
        div.innerHTML += `Телефон: ${phoneInput.value}<br>`;
        div.innerHTML += `Образование: ${educationInput.value}<br>`;
        if(document.querySelector("#sex-m").checked){
            div.innerHTML += `Пол: ${document.querySelector("#sex-m").value}<br>`;
        } else if (document.querySelector("#sex-f").checked){
            div.innerHTML += `Пол: ${document.querySelector("#sex-f").value}<br>`; 
        }

        let hobbyValue = [];

        hobbies.forEach((hobby) => {
            if(document.querySelector("#"+hobby).checked){
                hobbyValue.push(document.querySelector("#"+hobby).value);
            }
        });

        div.innerHTML += `Хобби: ${hobbyValue.join(",")}<br>`;
        div.innerHTML += `О себе: ${aboutInput.value}<br>`;

        let avatar = avatarInput.value;
        let row = avatar.split("\\");// "\" - экранирует спецсимволы
        div.innerHTML += `Аватар: ${row[row.length-1]}<br>`;// название картинки без полного пути
        div.innerHTML += `Аватар: ${avatarInput.value}<br>`;// полный путь
        this.reset();// очищение формы this == form
    }
    
});