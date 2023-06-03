const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
    type: "INIT",

    articles: [
        {
           id: 1,
           name:"First article",
           text:"Hi everyone",
           picture: "Flower frog.jpg" 
        }
    ],

    lastArticleId: 1
});

module.exports = store;