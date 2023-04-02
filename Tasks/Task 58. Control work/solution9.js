/*9. Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, содержащихся в этой строке.*/

function getVowelsNumber(text) {
    let vowels = "aeiouy";
    count = text.split("").filter((item) => vowels.includes(item)).length;
    return count;
}

let count;
let text = "When you get older, plainer, saner will you remember all the danger we came from ?";

getVowelsNumber(text);

console.log(count);