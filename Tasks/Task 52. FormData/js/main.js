let form = document.getElementById("reg_form");

form.addEventListener("submit", function(event){
    event.preventDefault();//отменяет отправку формы

    let errors = document.querySelectorAll(".error-text");//<span class="error-text">Заполните поле</span>

    if (errors.length) {
        Array.from(errors).forEach((errorSpan) => {
            errorSpan.parentElement.classList.remove("error");
            errorSpan.remove();
        });
    }

    let hasError = false;

    let data = new FormData(this);
    // name, phone, email, education, sex, about - одно значениe
    // hobby[] - множественные поля
    // avatar - файл

    let fields = ["name", "phone", "email", "education", "sex", "about"];// значения атрибута name

    fields.forEach((name) => {
        if (data.get(name) == "") {
            let span = document.createElement("span");
            span.classList.add("error-text");//span.className = "error-text";
            span.innerText = "Заполните поле";
            let field = this.querySelector(`[name="${name}"]`);
            field.insertAdjacentElement("afterend", span);
            hasError = true;
        }
    });

    let hobbies = data.getAll("hobby[]");

    if (hobbies.length == 0) {
        let span = document.createElement("span");
        span.className = "error-text";
        span.innerText = "Выберите хобби";
        document.querySelector("#hobby-3").parentElement.insertAdjacentElement("afterend", span);
        hasError = true;
    }

    if (!hasError) {
        let div = document.querySelector(".result");

        div.innerHTML += `Имя: ${data.get("name")}<br>`;
        div.innerHTML += `Email: ${data.get("email")}<br>`;
        div.innerHTML += `Телефон: ${data.get("phone")}<br>`;
        div.innerHTML += `Образование: ${data.get("education")}<br>`;
        div.innerHTML += `Пол: ${data.get("sex")}<br>`;
        div.innerHTML += `Хобби: ${data.getAll("hobby[]").join(",")}<br>`;
        div.innerHTML += `О себе: ${data.get("about")}<br>`;

        let path = data.get("avatar").name;
        let pathArray = path.split("\\");
        let file = pathArray[pathArray.length - 1];
        div.innerHTML += `Аватар: ${file}<br>`;

        this.reset();//очищаем форму
    }
});

