let form = document.getElementById("reg_form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let result = document.querySelector(".result");
    
    let name = document.querySelector("#name").value;
    result.innerHTML = result.innerHTML + `Имя: ${name}<br>`;

    let email = document.querySelector("#email").value;
    result.innerHTML = result.innerHTML + `Электронная почта: ${email}<br>`;

    let phone = document.querySelector("#phone").value;
    result.innerHTML = result.innerHTML + `Телефон: ${phone}<br>`;

    let education = document.querySelector("#education").value;
    result.innerHTML = result.innerHTML + `Образование: ${education}<br>`;

    //let sex = document.querySelector("#")
})