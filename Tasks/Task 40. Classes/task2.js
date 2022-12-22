/*Задание #2
Создайте пример наследования, реализуйте класс Student и класс Aspirant, 
аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит переменные: String firstName, lastName, group. 
А также, averageMark, содержащую среднюю оценку.
б) Добавить конструктор в оба класса. 
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. 
Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. Переопределить этот метод 
в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. 
Вызвать метод getScholarship() для каждого элемента массива.*/

class Student {
    firstName;
    lastName;
    group;
    averageMark;
    constructor(name, surname, group, mark){
        this.firstName = name;
        this.lastName = surname;
        this.group = group;
        this.averageMark = mark;
    }

    getScholarship(){
        if(this.averageMark == 5){
            return "100 $";
        }else{
            return "80 $";
        }
    }
}

class Aspirant extends Student {
    scientificResearch;
    constructor(name, surname, group, mark, scientificResearch){
        super(name, surname, group, mark);
        this.scientificResearch = scientificResearch; 
    }

    getScholarship() {
        if (this.averageMark == 5) {
            return "200 $";
        } else {
            return "180 $";
        }
    }
}

let students = [];
let student = new Student("Вася","Петров",15, 4.8);
students.push(student);
let aspirant = new Aspirant("Петя", "Васильев",1, 5, "Магистерская");
students.push(aspirant);

students.forEach(function(item){
    console.log(item.getScholarship());
});