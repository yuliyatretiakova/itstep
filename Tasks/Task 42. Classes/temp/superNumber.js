class SuperNumber extends Number{

    moneyFormat(currency){
        return this.valueOf() + " " + currency; // this.valueOf() - значение для примитивного типа
    }
}

let a = new SuperNumber(14);

console.log(a.moneyFormat("$"));

console.log(a);

let b = new Number(15);

Number.prototype.moneyFormat = function(currency){
        return this.valueOf() + " " + currency; // this.valueOf() - значение для примитивного типа
    }

console.log(b.moneyFormat("$"));