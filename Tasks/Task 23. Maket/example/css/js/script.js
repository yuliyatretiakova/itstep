document.getElementById("open_menu").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mobile").classList.toggle("open");
    return false;
})

document.getElementById("close_mobile").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("mobile").classList.remove("open");
    return false;
})

document.getElementById("contact_form").addEventListener("submit", function(event){
    event.preventDefault();
    var error = false;
    var data = new FormData(this);
    if(document.getElementById("name").value == "")
        error = true;
    if(document.getElementById("phone").value == "")
        error = true;
    if(document.getElementById("email").value == "")
        error = true;
    if(document.getElementById("message").value == "")
        error = true;
    
    if(error){
        document.getElementById("form_error").classList.remove("d-none");
        document.getElementById("form_success").classList.add("d-none");
    }
    else{
        document.getElementById("form_success").classList.remove("d-none");
        document.getElementById("form_error").classList.add("d-none");
        fetch(window.wp_data.ajax_url,
            {
            body: data,
            method: "post"
        });
    }
});