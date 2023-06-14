const React = require("react");
const Form = require("./Form.jsx");
const Blog = require("./Blog.jsx");
const {Route, Switch} = require("react-router");

const AppView = () => {

    return <div>
        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/blog" component={Blog} />
        </Switch>
    </div>;
}

module.exports = AppView;