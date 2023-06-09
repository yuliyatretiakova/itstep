const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
    type: "INIT",

    products:[
        {
            picture:"milk.webp",
            id: 1,
            name: "Молоко",
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
