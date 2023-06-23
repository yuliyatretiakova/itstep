const React = require("react");
const Form = require("./Form.jsx");
const Blog = require("./Blog.jsx");
const Title = require("./Title.jsx");
const Post = require("./Post.jsx");
const {Route, Switch} = require("react-router");
const Menu = require("./Menu.jsx");
const Editing = require("./Editing.jsx");

const AppView = () => {

    return <div>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Title} />
            <Route path="/edit/:id" component={Editing} />
            <Route  path="/form" component={Form} />
            <Route path="/blog/:id" component={Post} />
            <Route path="/blog" component={Blog} />
        </Switch>
    </div>;
}

module.exports = AppView;