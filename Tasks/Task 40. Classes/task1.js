/*Задание #1
а) Создайте класс Phone, который содержит поля number, model и weight.
б) Добавить конструктор в класс Phone, который принимает на вход три 
параметра для инициализации переменных класса - number, model и weight. 
в) Создайте три экземпляра этого класса. 
г) Выведите на консоль значения их переменных. 
д) Добавить в класс Phone методы: receiveCall, имеет один параметр – 
имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – 
возвращает номер телефона. Вызвать эти методы для каждого из объектов.*/

class Phone {
    number;
    model;
    weight;

    constructor(number, model, weight){
        this.number = number;
        this.model = model;
        this.weight = weight;
    }

    receiveCall(name){
        console.log(`Звонит ${name}`);
    }

    getNumber(){
        return this.number;
    }
}

let Samsung = new Phone ("33-15-18","Galaxy", 150);
let Huawei = new Phone ("58-64-12", "Loto", 160);
let Xiaomi = new Phone ("87-35-36", "Mi 6", 135);

console.log(Samsung, Huawei, Xiaomi);
Samsung.receiveCall("Володя");
console.log(Samsung.getNumber());
Huawei.receiveCall("Татьяна");
console.log(Huawei.getNumber());
Xiaomi.receiveCall("Александр");
console.log(Xiaomi.getNumber());