let Calculator = {
    a: 0,
    b: 0,
    add: function(){
        return this.a + this.b;
    },
    sub: function(){
        return this.a - this.b;
    },
    mul: function(){
        return this.a * this.b;
    },
    div: function(){
        return this.a / this.b;
    },
    power(a){
        return this.a**a; //this.a - свойство объекта, a - параметр функции, который передается извне объекта
    }
}

let x = 4, y = 5;

Calculator.a = y, Calculator.b = 2;

let operation1 = Calculator.mul(); // 10

Calculator.a = x, Calculator.b = operation1;

let operation2 = Calculator.sub(); // -6

let operation3 = Calculator.power(2); // 16

console.log(operation1, operation2, operation3);

// 4 * 4 - 4 * 2;

Calculator.a = 4, Calculator.b = 2;

let result1 = Calculator.power(2);
let result2 = Calculator.mul();

Calculator.a = result1, Calculator.b = result2;

let result = Calculator.sub();

console.log(result);

