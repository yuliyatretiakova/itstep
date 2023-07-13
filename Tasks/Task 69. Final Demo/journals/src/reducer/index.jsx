const redux = require("redux");
const user = require("./user.jsx");
const connectRouter = require("connected-react-router").connectRouter;

const reducers = (history) => redux.combineReducers({
    user: user,
    router: connectRouter(history)
})


module.exports = reducers;
