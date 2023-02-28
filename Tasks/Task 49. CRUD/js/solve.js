let addButton = document.querySelector(".btn_add");
addButton.addEventListener("click", function(){
    let div = document.querySelector("div");

    let ul = div.querySelector("ul");

    if(!ul){
        ul = document.createElement("ul");
        div.insertAdjacentElement("afterbegin", ul);
    }

    let content = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerText = content;
    ul.insertAdjacentElement("beforeend", li);

    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    li.insertAdjacentElement("beforeend", editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    li.insertAdjacentElement("beforeend", deleteButton);

    deleteButton.addEventListener("click", function(){
        let ul = this.parentElement.parentElement;//this - deleteButton
        this.parentElement.remove();

        if(ul.children.length == 0){
            ul.remove();
        }
    });

    editButton.addEventListener("click", function(){
        let text = this.parentElement.firstChild.nodeValue;//извлекаем текст пункта списка
        document.querySelector("input").value = text;// помещаем текст пункта списка в инпут
        let editLi = document.querySelector(".edit");
        if(editLi){
            editLi.classList.remove("edit");
        }
        this.parentElement.classList.add("edit");
    });
    document.querySelector("input").value = "";
});

let saveButton = document.querySelector(".btn_save");
saveButton.addEventListener("click", function(){
    let content = document.querySelector("input").value;
    let editLi = document.querySelector(".edit");
    if(editLi){
        editLi.firstChild.nodeValue = content;
        editLi.classList.remove("edit");
        document.querySelector("input").value = "";
    }
});