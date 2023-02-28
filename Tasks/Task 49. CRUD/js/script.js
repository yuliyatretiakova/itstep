let btnAdd = document.querySelector(".btn_add");
btnAdd.addEventListener("click", function(){
    let name = document.querySelector("#number1").value;
    let weight = document.querySelector("#number2").value;
    let tbody = document.querySelector("table").firstElementChild;

    let tr = document.createElement("tr");
    tbody.insertAdjacentElement("beforeend",tr);
    
    let firstTd = document.createElement("td");
    firstTd.innerText = name;
    tr.insertAdjacentElement("beforeend", firstTd);

    let secondTd = document.createElement("td");
    secondTd.innerText = weight;
    tr.insertAdjacentElement("beforeend", secondTd);

    let thirdTd = document.createElement("td");
    tr.insertAdjacentElement("beforeend", thirdTd);

    let buttonEdit = document.createElement("button");
    buttonEdit.innerText = "Редактировать";
    buttonEdit.classList.add("edit_btn");
    thirdTd.insertAdjacentElement("beforeend", buttonEdit);

    let buttonDelete = document.createElement("button");
    buttonDelete.innerText = "Удалить";
    buttonDelete.classList.add("delete_btn");
    thirdTd.insertAdjacentElement("beforeend", buttonDelete);

    document.querySelector("#number1").value = "";
    document.querySelector("#number2").value = "";

    buttonDelete.addEventListener("click", function(){
        this.parentElement.parentElement.remove();
    });

    buttonEdit.addEventListener("click", function(){
        let content1 = this.parentElement.previousSibling.previousSibling.innerText;
        let content2 = this.parentElement.previousSibling.innerText;
        document.querySelector("#number1").value = content1;
        document.querySelector("#number2").value = content2;
        
        let editTr = document.querySelector(".edit");
        if(editTr){
            editTr.classList.remove("edit");
        }
        this.parentElement.parentElement.classList.add("edit");
    });
});

let saveButton = document.querySelector(".btn_save");
saveButton.addEventListener("click", function(){
    let content1 = document.querySelector("#number1").value;
    let content2 = document.querySelector("#number2").value;
    let editTr = document.querySelector(".edit");
    if(editTr){
        editTr.firstElementChild.innerText = content1;
        editTr.firstChild.nextSibling.innerText = content2;
        document.querySelector("#number1").value = "";
        document.querySelector("#number2").value = "";
    }
});