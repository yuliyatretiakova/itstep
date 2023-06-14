const redux = require("redux");
const blog = require("./blog.jsx");
const connectRouter = require("connected-react-router").connectRouter;

const reducers = (history) => redux.combineReducers({
    blog: blog,//первый blog: - название редюсера в state, второй "blog,"- сам подключенный редюсер из файла (смотри 2 строку)
    router: connectRouter(history)
})

module.exports = reducers;