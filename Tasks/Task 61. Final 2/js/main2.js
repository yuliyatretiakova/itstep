/*2. Дан полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 61. Practice\task.txt"). Вывести количество папок, которые входят в заданный путь.*/

let str = "D:\\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt";

let a = str.split("\\").length;

console.log(a);