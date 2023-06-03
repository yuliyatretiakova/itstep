const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
    type: "INIT",

    products:[
        {
            id: 1,
            name: "Milk",
            price: 5,
            quantity: 7,
            favorite: false,
            unit: "л"
        }
    ],

    user: {
        name: "Вася Пупкин",
        age: 40
    },

    lastIdProduct: 1
});

module.exports = store;
