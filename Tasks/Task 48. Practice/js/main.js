let button = document.querySelector("button");
if(button){
    button.addEventListener("click", function(){
        let div = document.querySelector("div");
        if(div.children.length != 0){
            div.innerHTML = "";
        } else{
            let ul = document.createElement("ul");
            div.insertAdjacentElement("afterbegin", ul);
            let input = document.querySelector("input");
            let x = input.value;

            for (let i = 0; i < x; i++) {
                let li = document.createElement("li");
                li.innerHTML = `Пункт ${i + 1}`;
                ul.insertAdjacentElement("beforeend", li);
            }
        }
    });
}