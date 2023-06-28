const React = require("react");
const connect = require("react-redux").connect;
const {COMMENT_ARTICLE} = require("../actions/actions.jsx");

const CommentForm = (props) => {
    
    const routeParams = props;//для прямого обращения
    
    let [data, setData] = React.useState({
        postId: props.id,
        author: "",
        text: ""
    });

    
    function handleFormSubmit(event) {
        event.preventDefault();
        props.onArticleComment(data);
        setData({
            postId: props.id,
            author: "",
            text: ""
        });
    }

    
    function handleAuthorChange(event) {
        setData({ ...data, author: event.target.value });
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value });
    }

    return <>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="author" className="form-label">Автор</label>
                <input type="text" className="form-control" id="author" value={data.author} onChange={handleAuthorChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" value={data.text} onChange={handleTextChange} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>
}

const mapStateToProps = state => {
    return {
        comments: state.blog.comments
    }
};

const mapDispatchToProps = dispatch => ({
    onArticleComment: (comment) => {
        dispatch({
            type: COMMENT_ARTICLE, comment
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(CommentForm);