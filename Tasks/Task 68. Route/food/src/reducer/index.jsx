const redux = require("redux");
const product = require("./product.jsx");
const connectRouter = require("connected-react-router").connectRouter;

const reducers = (history) => redux.combineReducers({
    product: product,
    router: connectRouter(history)
})


module.exports = reducers;
