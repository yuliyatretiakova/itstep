let button = document.querySelector("button");
if (button){
    button.addEventListener("click", function (){
        let div = document.querySelector("div");
        let ul = div.querySelector("ul");
        if(!ul){
            ul = document.createElement("ul");
            div.insertAdjacentElement("afterbegin", ul);
        } 
        let input = document.querySelector("input");
        let x = input.value;
        let li = document.createElement("li");
        li.innerHTML = x;
        ul.insertAdjacentElement("beforeend", li);

        li.addEventListener("click", function(){

            let parent = this.parentElement;
            this.remove();

            if(parent.children.length == 0){
                parent.remove();
            }
        })
    }); 
}

/*let liDel = document.querySelectorAll("li");
if(liDel.length){
    console.log(liDel.length);
    Array.from(liDel).forEach((item) => {
       item.addEventListener("click", function(){
        item.outerHTML = "";
       }); 
    });
}*/

