document.querySelector("button").onclick = function(event){
    let str = document.querySelector("input").value;
    if(str.length == 1){
        let p = document.querySelector("p").textContent;
        let count = p.split(str).length - 1;
        document.querySelector("div").innerHTML = count;
    }else{
        document.querySelector("div").innerHTML ="";
    }
}