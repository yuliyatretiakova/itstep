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
    type: "INIT_USERS",
    users: [
        {
            id: 1,
            login: "admin",
            password: "123456"
        },
        {
            id: 2,
            login: "user",
            password: "654321"
        }
    ],
    currentUser: "",
    lastUserId: 2,
});
/*store.dispatch({
    type: "INIT_ARTICLES",
    articles: [
        {
            id: 1,
            journal: "Вестник Витебского государственного университета",
            title: "Влияние количества алгебраических чисел на величину дискриминантов и производных в корне",
            authors: ["А.Ю.Харин", "A.У.Новик", "А.Ю. Петров"],
            date: "06.09.2021"
        },
        {
            id: 2,
            journal: "Вестник Витебского государственного университета",
            title: "Мой любимый React. Том 1",
            authors: ["A.И.Никитин"],
            date: "06.09.2021"
        },
        {
            id: 3,
            journal: "Вестник Витебского государственного университета",
            title: "Мой любимый React. Том 2",
            authors: ["A.И.Никитин"],
            date: "06.09.2021"
        },
        {
            id: 4,
            journal: "Вестник Витебского государственного университета",
            title: "Мой любимый React. Том 3",
            authors: ["A.И.Никитин"],
            date: "06.09.2021"
        },
    ],
    lastArticleId: 4,
});*/
module.exports = {store, history};