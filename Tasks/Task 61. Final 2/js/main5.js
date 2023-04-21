/*5. Дана строка, состоящее из слов между которыми может быть больше одного пробела. Удалить все лишние пробелы, т.е. оставить по 1 пробелу между словами, в том числе в начале и в конце.*/

let sentence = "Лети,  моя  душа."

let newSentence = sentence.split("").filter(function(letter, item, array){
    if(letter == " " && array[item+1] == " "){
        return false;
    }
    return true;
}).join("");

console.log(newSentence);