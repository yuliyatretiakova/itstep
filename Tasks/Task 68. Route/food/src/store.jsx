/*
state = {
    products: [
        {
            id,
            name,
            price,
            quantity,
            favorite
        }
    ],
    user: {
        name,
        age
    },

    lastIdProduct //- id последнего добавленного продукта
}
*/
const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory =  require('history').createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;


const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {}, 
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
    );

store.dispatch({
    type: "INIT",
    user: {
        name: "Вася Пупкин",
        age: 30
    },
    products: [
        {
            id: 1,
            name: "Молоко",
            price: 5,
            quantity: 1,
            favorite: false
        }
    ],
    lastIdProduct: 1
});

module.exports = {store, history};