let addButton = document.querySelector(".btn_add");
addButton.addEventListener("click", function(){
    let div = document.querySelector("div");

    let ul = div.querySelector("ul");

    if(!ul){
        ul = document.createElement("ul");
        div.insertAdjacentElement("afterbegin", ul);
    }

    let task = document.querySelector("input").value;

    let li = document.createElement("li");
    li.innerText = task;
    ul.insertAdjacentElement("beforeend", li);

    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    li.insertAdjacentElement("beforeend", editButton);

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    li.insertAdjacentElement("beforeend", deleteButton);

    deleteButton.addEventListener("click", function() {
        let ul = this.parentElement.parentElement;
        this.parentElement.remove(); //this = deleteButton

        if(ul.children.length == 0){
            ul.remove();
        }
    })

    editButton.addEventListener("click", function()  {
        let text = this.parentElement.firstChild.nodeValue;
        document.querySelector("input").value = text;
        let editLi = document.querySelector(".edit");
        if(editLi){
            editLi.classList.remove("edit");
        }
        this.parentElement.classList.add("edit");
    });
});


let saveButton = document.querySelector(".btn_save");

saveButton.addEventListener("click", function(){
    let task = document.querySelector("input").value;
    let editLi = document.querySelector(".edit");
    if(editLi){
        editLi.firstChild.nodeValue = task;
        editLi.classList.remove("edit");
        document.querySelector("input").value = "";
    }
});