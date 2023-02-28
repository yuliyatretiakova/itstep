let button = document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){

        let div = document.querySelector("div");

        if(div.children.length == 0){
            let ol = document.createElement("ol");
            Array.from(div.classList).forEach((item) => {
                let li = document.createElement("li");
                li.innerText = item;
                ol.insertAdjacentElement("beforeend", li);
            });
            div.insertAdjacentElement("afterbegin", ol);
        }
        
    });
}