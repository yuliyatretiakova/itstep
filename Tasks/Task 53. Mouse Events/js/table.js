/*let tds = document.querySelectorAll("td");

Array.from(tds).forEach((item) => {
    item.addEventListener("mouseover", function(event){
        console.log(this.innerText); //this = td
    })
})

*/


let table = document.querySelector("table");

table.addEventListener("mou", function(event){
    //this = table
    //event.target = td, на которую навели внутри
    alert(event.target.innerText);
});
