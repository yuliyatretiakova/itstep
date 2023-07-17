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