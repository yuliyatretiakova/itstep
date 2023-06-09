const reducer = require("./reducer/reducer.jsx");
const redux = require("redux");

const store = redux.createStore(reducer);

store.dispatch({
    type: "INIT",

    articles: [
        {
            id: 1,
            name:"Hi everyone!",
            text:"I glad to see you all on my page!",
            picture: "Flower frog.jpg",
            date: new Date(),
            like: 0
        }
    ],

    lastArticleId: 1
});

module.exports = store;