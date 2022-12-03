/*1. Дан пустой массив, его размер n и некоторое значение value. 
Заполнить массив этим значением. (используя fill)*/
console.log("Task 1");

let array = new Array(5);//задание пустого массива на 5 элементов
let value = "ok";
array.fill(value);
console.log(array);

/*2. Найти сумму только положительных элементов массива.*/
console.log("Task 2");

let a = [2,3,7,-4,-6,1,0];
let sum = 0;
let b = a.filter(function(item){
    return item > 0;
}).forEach(function(item){// посчитать через reduce
    sum += item;
})
console.log(sum);

sum = 0;
b = a.filter((item) => item > 0).reduce((sum, item) => sum + item, 0);
console.log(b);

/*3. Слить 3 массива и вывести на экран элементы 
полученного массива в порядке убывания значений.*/
console.log("Task 3");

let x = [0,-5,7,3,6,-2];
let y = [1,4,2,-1,-4];
let z = [-3,5,-6,-7];
let w = x.concat(y,z).sort((a,b) => a - b);
console.log(w);

/*4. Проверить 2 массива на полное совпадение.*/
console.log("Task 4");

a = [1,2,3];
b = [1,2,3];

if(a.length == b.length){
    let isEqual = a.every(function(item,index){
        return a[index] == b[index];
    });
    if(isEqual){
        console.log("Массивы полностью совпадают");
    } else{
        console.log("Массивы не совпадают");
    }
}else{
    console.log("Массивы не совпадают"); 
}

/*5. Дан массив [1,3,6,4,3,3,5,6]. 
Исключить из него значения из массива [1,3].
Должно работать для любых 2 аналогичных массивов.*/
console.log("Task 5");

let c = [1, 3, 6, 4, 3, 3, 5, 6];
let d = [1, 3];

let e = c.filter((item) => d.indexOf(item) == -1);
console.log(e);
/*по аналогии с задачей 6 task 36*/

/*6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, 
которые больше среднего арифметического значения всех 
элементов массива.*/
console.log("Task 6");

c = [1, 3, 6, 4, 3, 3, 5, 6];
let average = c.reduce((sum, item) => sum + item, 0) / c.length;
console.log(average);
d = c.filter((item) => item > average);
console.log(d);

/*7. Дано предложение на русском языке. 
Определить, является ли оно панграммой.*/
console.log("Task 7");

let symbols = ".,:;!?-, ";
let alphabet = "абвгдежзийклмнопрстуфхцчшщъыьэюяё";
let sentence = "Эй, цирюльникъ, ёжик выстриги, да щетину ряхи сбрей, феном вошь за печь гони!"

let isPangram = sentence.toLowerCase().split("").filter(function(item){
    return symbols.indexOf(item) == -1;
}).sort();
isPangram = isPangram.filter((item, index) => isPangram.indexOf(item) == index).join("");

if(isPangram == alphabet){
    console.log("Предложение является панграммой");
}else{
    console.log("Предложение не является панграммой");
}

/*8. Дано натурально число. Получить число, 
которое образуется из записи цифр данного в обратном порядке.*/
console.log("Task 8");

let number = 35;
let str = String(number);
let inverseOrder = str.split("").reverse().join("");
inverseOrder = Number(inverseOrder);

console.log(inverseOrder);

/*9. Дан массив и число A. Переставить элементы в массиве так, 
чтобы сначала стояли элементы меньшие числа A, а потом большие.*/
console.log("Task 9");

let k = [5,6,3,9,35,24,36,2,1];
number = 28;
let h = [];
let j = [];
k.forEach(function(item){
    if(item < number){
        h.push(item);
    }else{
        j.push(item);
    }
});
console.log(h,j);
k = h.concat(j);
console.log(k);

/*10. Дано 3 массива. Найти элементы, которые встречаются в 
каких-либо 2 массивах, но их нету в 3 массиве.*/
console.log("Task 10");

x = [2,3,4,5,8,9,1];
y = [0,6,7,3,5,4,2];
z = [0,9,7,8,6,1,5];
h = [];

x.forEach(function(item){
    if ((y.includes(item) && !z.includes(item)) || (!y.includes(item) && z.includes(item)))
    h.push(item);
});

y.forEach(function (item) {
    if ((z.includes(item) && !x.includes(item)))
        h.push(item);
});

console.log(h);

/*11. Дана строка. Подсчитать количество слогов в слове.*/
console.log("Task 11");
str = "мадагаскар";
let vowels = "аеёиоуэюя";
let syllables = str.split("").filter(function(item){
    if(vowels.includes(item)){
        return item;
    }
}).length;

console.log(syllables);

/*12. Дана слово. Получить строку из данного слова, 
где нечетные буквы будут заглавными, а четные - строчными.*/
console.log("Task 12");

let word = "Панама";
let newWord = word.toLowerCase().split("").map((item, i) => {
    if(i % 2 == 1){
        return item.toUpperCase();
    } else{
        return item;
    }
}).join("");
console.log(newWord);

/*13. Дано полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt"). 
Вывести все названия папок, которые входят в заданный путь. */
console.log("Task 13");

str = "D:\\ITStep\\itstep2\\Tasks\\Task 37. Practice\\task.txt";
let folderNames = str.split("\\");
console.log(folderNames);
folderNames.shift();
folderNames.pop();
console.log(folderNames);

/*14. Дана строка. Поделить строку на фрагменты по 3 символа в каждой.*/
console.log("Task 14");

str = "abcdefghijklmnopqrstuvwxyz";
let result = [];
a = str.split("");
a.forEach(function(item,index){
    if(index % 3 == 0){
        result.push(str.substring(index,index + 3));
    }
});

console.log(result);

result = [];

for(let index = 0; index < str.length; index += 3){
    result.push(str.substring(index, index + 3));
}

console.log(result);


/*15. Дано слово. Проверить, является ли данное слово палиндромом.*/
console.log("Task 15");

str = "А роза упала на лапу Азора";
let isPalindrome = str.toLowerCase().split(" ").join("");
console.log(isPalindrome);
let inverseStr = isPalindrome.split("").reverse().join("");
console.log(inverseStr);

if(isPalindrome == inverseStr){
    console.log("это палидром");
}else{
    console.log("это не палидром");
}

/*16. Дано предложение. Найти самое длинное слово в предложении.*/
console.log("Task 16");

let isSentence = "От улыбки хмурый день светлей";
let longWord = isSentence.split(" ").reduce(function(word, item){
    if(item.length > word.length){
        return item;
    }
    return word;
}, "");
console.log(longWord);

/*17. Дан массив из слов. Проверить условие, 
что первая буква каждого слова равна последней 
букве предыдущего слова.*/
console.log("Task 17");

let isWordArray = ["роза","алмаз","зонт","тон","нота"]
let isTrue = isWordArray.every(function(item, index, array){
    if(index > 0){
        if(item[0].toLowerCase() == array[index - 1].slice(-1).toLowerCase()){
            return true;
        }
        return false;
    }
    return true;
});
console.log(isTrue);

/*18. Дан массив чисел и число N. 
Вывести из данного массива N самых больших по значению чисел.*/
console.log("Task 18");
let l = [1,17,22,34,56,3,6,7,12,32,55];
let N = 5;
let m = l.sort((a,b) => a - b).splice(-5);
console.log(m);

/*19. Дано 2 предложения. Посчитать количество слов, 
которые есть в обоих предложениях.*/
console.log("Task 19");
let sentence1 = "Я пришёл к тебе с приветом";
let sentence2 = "Я принёс тебе цветы";
sentence1 = sentence1.split(" ");
sentence2 = sentence2.split(" ");
console.log(sentence1,sentence2);
let sumOfWords = [];
sentence1.forEach(function(item){
    if(sentence2.includes(item)){
       return sumOfWords.push(item);
    }
});
console.log(sumOfWords.length);

/*20. Дана строка, состоящее из слов между которыми может быть больше одного пробела. 
Удалить все лишние пробелы, т.е. оставить по 1 пробелу между словами.*/
console.log("Task 20");

str = "Мама    мыла   раму";
str = str.split("").filter(function(letter, i, array){
    if(letter == " " && array[i + 1] == " ")
        return false;
    return true;
}). join("");
console.log(str);

/*21. Дано 2 массива и число К. 
Найти числа по одному из каждого массива, сумма которых равна К*/
console.log("Task 21");

x = [2, 3, 4, 5, 8, 9, 1];
y = [0, 6, 7, 3, 5, 4, 2];
let K = 9;
x.forEach(function(item, index, array){
    if(y.includes(K - item)){
        console.log(item, K - item)
    }
});