let form = document.getElementById("reg_form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let result = document.querySelector(".result");
    
    let name = document.querySelector("#name");
    result.innerHTML = result.innerHTML + `Имя: ${name.value}<br>`;
    
    let nameError;
    if (name.value == ""){
        if (name.nextElementSibling){
            name.nextElementSibling.remove();
        }

        nameError = document.createElement("span");
        nameError.innerText = "Введите имя";
        name.insertAdjacentElement("afterend", nameError);

    }else if(name.nextElementSibling){
        name.nextElementSibling.remove();
    }

    let email = document.querySelector("#email");
    result.innerHTML = result.innerHTML + `Электронная почта: ${email.value}<br>`;

    let emailError;
    if (email.value == "") {
        if (email.nextElementSibling) {
            email.nextElementSibling.remove();
        }

        emailError = document.createElement("span");
        emailError.innerText = "Введите почту";
        email.insertAdjacentElement("afterend", emailError);

    } else if (email.nextElementSibling) {
        email.nextElementSibling.remove();
    }

    let phone = document.querySelector("#phone");
    result.innerHTML = result.innerHTML + `Телефон: ${phone.value}<br>`;

    let phoneError;
    if (phone.value == "") {
        if (phone.nextElementSibling) {
            phone.nextElementSibling.remove();
        }

        phoneError = document.createElement("span");
        phoneError.innerText = "Введите номер телефона";
        phone.insertAdjacentElement("afterend", phoneError);

    } else if (phone.nextElementSibling) {
        phone.nextElementSibling.remove();
    }

    let education = document.querySelector("#education");
    result.innerHTML = result.innerHTML + `Образование: ${education.value}<br>`;

    let educationError;
    if (education.value == "") {
        if (education.nextElementSibling) {
            education.nextElementSibling.remove();
        }

        educationError = document.createElement("span");
        educationError.innerText = "Выберете образование";
        education.insertAdjacentElement("afterend", educationError);

    } else if (education.nextElementSibling) {
        education.nextElementSibling.remove();
    }

    let sexm = document.querySelector("#sex-m");
    if(sexm.checked){
        result.innerHTML += `Пол: ${sexm.value}<br>`;
    }

    let sexf = document.querySelector("#sex-f");
    if (sexf.checked) {
        result.innerHTML += `Пол: ${sexf.value}<br>`;
    }

    let sexError;
    if ((!sexm.checked) && (!sexf.checked)){
        if(sexf.parentElement.nextElementSibling){
            sexf.parentElement.nextElementSibling.remove();
        }
        sexError = document.createElement("span");
        sexError.innerText = "Выберете пол";
        sexf.parentElement.parentElement.insertAdjacentElement("beforeend", sexError);
    } else if (sexf.parentElement.nextElementSibling){
        sexf.parentElement.nextElementSibling.remove();
    }

    let hobbies = [];
    let hobby1 = document.querySelector("#hobby-1");
    if(hobby1.checked){
        hobbies.push(hobby1.value);
    }

    let hobby2 = document.querySelector("#hobby-2");
    if (hobby2.checked) {
        hobbies.push(hobby2.value);
    }

    let hobby3 = document.querySelector("#hobby-3");
    if (hobby3.checked) {
        hobbies.push(hobby3.value);
    }

    result.innerHTML += `Хобби: ${hobbies.join(",")} <br>`; 

    let hobbyError;
    if ((!hobby1.checked) && (!hobby2.checked) && (!hobby3.checked)){
        if(hobby3.parentElement.nextElementSibling){
            hobby3.parentElement.nextElementSibling.remove();
        }
        hobbyError = document.createElement("span");
        hobbyError.innerText = "Выберете хобби";
        hobby3.parentElement.parentElement.insertAdjacentElement("beforeend", hobbyError);
    } else if (hobby3.parentElement.nextElementSibling){
        hobby3.parentElement.nextElementSibling.remove();
    }

    let aboutmyself = document.querySelector("#about");
    result.innerHTML += `О себе: ${aboutmyself.value}<br>`;

    let aboutmyselfError;
    if (aboutmyself.value == "") {
        if (aboutmyself.nextElementSibling) {
            aboutmyself.nextElementSibling.remove();
        }

        aboutmyselfError = document.createElement("span");
        aboutmyselfError.innerText = "Заполните поле, пожалуйста";
        aboutmyself.insertAdjacentElement("afterend", aboutmyselfError);

    } else if (aboutmyself.nextElementSibling) {
        aboutmyself.nextElementSibling.remove();
    }
});