/*4. Дано слово на русском языке. Посчитать количество слогов в слове.*/

function getSyllablesNumber(word){
    let vowels = "аеёиоуыэюя";
    count = word.split("").filter((item) => vowels.includes(item)).length;
    return count;
} 

let count;
let word = "кардиомиопатия";
getSyllablesNumber(word);

console.log(count);



