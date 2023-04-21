/*8. Дано предложение. Найти символ, который чаще всего в нем встречается.*/

let sentence = "You are the sea, not the rock";

let unique = sentence.toLowerCase().split("").filter((item, index) => sentence.toLowerCase().indexOf(item) == index);
let countUnique = [];

unique.forEach(function(item, index){
    let count = sentence.toLowerCase().split("").filter((letter) => letter == item).length;
    countUnique[index] = count;
});

unique.forEach((item, index) => console.log (item, "->", countUnique[index]));

let mostCommon = countUnique.reduce((maxIndex, item, index) => {
    if (countUnique[index] > countUnique[maxIndex]){
        return index;
    }
    return maxIndex;
}, 0);
console.log(unique[mostCommon], countUnique[mostCommon]);

