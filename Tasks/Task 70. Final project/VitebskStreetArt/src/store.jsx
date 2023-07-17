const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const createBrowserHistory = require("history").createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;

const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);

/**
image: [
    {
    id:1,
    artistId: 1,
    title: "",
    path: "1.jpg",
    location: [55.19483685721631, 30.204918528912845]
    }
    
] ,

artist: [
    id:1,

]
 */
module.exports = {store, history};