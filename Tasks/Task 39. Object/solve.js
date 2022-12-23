/*Описать объект прямоугольник. Вывести в консоль площадь и периметр*/
console.log("Task 1");

let rectangle = {
    length : 5,
    width : 3,
    square(){
        return this.length * this.width;
    },
    perimeter(){
        return (this.length + this.width) * 2;
    }
}
console.log(rectangle.square(), rectangle.perimeter());