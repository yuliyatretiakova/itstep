/*6. Дано предложение. Найти самое короткое слово в предложении.*/

let sentence = "Всё уже есть в тебе.";
let shortestWord = sentence.split(" ").reduce((word, item) => {
    if(item.length < word.length){
        return item;
    }
    return word;
});
console.log(shortestWord);