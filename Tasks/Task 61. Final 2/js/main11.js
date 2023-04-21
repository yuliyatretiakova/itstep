/*11. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы (код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.
*/

let form = document.querySelector("form");

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

    data.forEach((value, name) => {
        if(value == ""){
            let span = document.createElement("span");
            this.classList.add("error-text");
            span.innerText = "Заполните поле";

            let field = this.querySelector(`[name="${name}"]`);
            if(name != "type"){
                field.insertAdjacentElement("afterend", span);
                field.parentElement.classList.add("error");
            }else{
                field.parentElement.parentElement.insertAdjacentElement("beforeend", span);
                field.parentElement.parentElement.classList.add("error");
            }
            hasError = true;
        }
    });

    if(!hasError){
        let table = document.querySelector("tbody");
        let saveButton = this.querySelector("button.save");

        if(saveButton){
            let tr = document.querySelector(".edit-row");
            let index = 0;
            data.forEach((value) => {
                let td = tr.children[index];
                td.innerText = value;
                index++;
            });
            saveButton.innerText = "Добавить";
            saveButton.classList.remove("save");
            tr.classList.remove("edit-row");
            getSum();
        }else{
            let tr = document.createElement("tr");
            data.forEach((value) => {
                let td = document.createElement("td");
                td.innerText = value;
                tr.insertAdjacentElement("beforeend", td);
            });
            tr.addEventListener("dblclick",function(event){
                let editTr = document.querySelector(".edit-row");
                if (editTr) {
                    editTr.classList.remove("edit-row");
                }
                this.classList.add("edit-row");

                document.querySelector(`[name="productCode"]`).value = this.children[0].innerText;
                document.querySelector(`[name="productName"]`).value = this.children[1].innerText;
                document.querySelector(`[name="priceForOne"]`).value = this.children[2].innerText;
                document.querySelector(`[name="quantity"]`).value = this.children[3].innerText;
                document.querySelector("[type='submit']").innerText = "Сохранить";
                document.querySelector("[type='submit']").classList.add("save");
            })

            let tdAction = document.createElement("td");

            let editButton = document.createElement("button");
            editButton.innerText = "Редактировать";
            tdAction.insertAdjacentElement("beforeend", editButton);

            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Удалить";
            tdAction.insertAdjacentElement("beforeend", deleteButton);

            tr.insertAdjacentElement("beforeend", tdAction);
            table.insertAdjacentElement("beforeend", tr);
            
            deleteButton.addEventListener("click", function(){
                this.closest("tr").remove();
                getSum();
            });


            editButton.addEventListener("click", function(){
                let editTr = document.querySelector(".edit-row");
                if(editTr){
                    editTr.classList.remove("edit-row");
                }
                this.closest("tr").classList.add("edit-row");

                document.querySelector(`[name="productCode"]`).value = this.closest("tr").children[0].innerText;
                document.querySelector(`[name="productName"]`).value = this.closest("tr").children[1].innerText;
                document.querySelector(`[name="priceForOne"]`).value = this.closest("tr").children[2].innerText;
                document.querySelector(`[name="quantity"]`).value = this.closest("tr").children[3].innerText;
                document.querySelector("[type='submit']").innerText = "Сохранить";
                document.querySelector("[type='submit']").classList.add("save");
            });
            getSum();
        }
        this.reset();
    }
});

function getSum(){
    let tr = document.querySelectorAll("tbody tr");
    let result = 0;
    if(tr.length){
        tr.forEach((item) => {
            let price = +item.children[2].innerText;
            let quantity = +item.children[3].innerText;
            result += price*quantity;
        });
    }
    document.querySelector(".sum").innerText = result;
}