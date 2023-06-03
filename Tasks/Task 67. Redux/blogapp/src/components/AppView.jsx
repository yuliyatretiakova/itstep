const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const React = require("react");
const Form = require("./Form.jsx");
const Blog = require("./Blog.jsx");

const AppView = (props) => {
    return <>
        <Form/>
        <Blog/>
    </>
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};

module.exports = connect(mapStateToProps, actions)(AppView);