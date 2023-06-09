const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const React = require("react");
const Form = require("./Form.jsx");
const Blog = require("./Blog.jsx");

const AppView = (props) => {
    return <>
        <Form onArticleAdd={props.addArticle}/>
        <Blog articles={props.articles} onArticleDelete={props.deleteArticle} onArticleLike={props.likeArticle} />
    </>
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles
    }
};

module.exports = connect(mapStateToProps, actions)(AppView);