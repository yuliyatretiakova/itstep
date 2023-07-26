let form = document.getElementById("formAddArt");

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

   let data = new FormData(this);

    let fields = ["name", "email", "message"];

    fields.forEach((name) => {
        if(data.get(name) == ""){
            let span = document.createElement("span");
            span.classList.add("error-text");
            span.innerText = "This is a required field";
            let field = this.querySelector(`[name="${name}"]`);
            //field.classList.add("error");
            field.insertAdjacentElement("afterend", span);
            hasError = true;
        }   
    });

    if(!hasError){
        this.reset();
    }
});

/*
let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function(event){
    event.preventDefault();
    this.classList.toggle
})*/ 
//КАК ЗАКРЫТЬ ФОРМУ??????
