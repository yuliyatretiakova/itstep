const reducer = require("./reducer/index.jsx");
const redux = require("redux");

const createBrowserHistory = require("history"). createBrowserHistory;
const routerMiddleware = require("react-router-redux").routerMiddleware;

const history = createBrowserHistory();
const store = redux.createStore(reducer(history), {},
    redux.compose(
        redux.applyMiddleware(
            routerMiddleware(history)
        )
    )
);
//первый параметр ф-ции createStore "reducer(history)": reducer - это переменная из первой строки, в которую в качестве параметра передаётся history из строки 7.
//второй параметр {} - начальное состояние хранилища state - пустое(если нужно, можно заполнить).
//третий параметр - стандартная конструкция для подключения роутера и хистори к стору

store.dispatch({
    type: "INIT",

    articles: [
        {
            id: 1,
            name: "Hi everyone!",
            text: "I glad to see you all on my page!",
            picture: "Flower frog.jpg",
            date: new Date(),
            like: 0
        }
    ],

    lastArticleId: 1
});

module.exports = {store, history};