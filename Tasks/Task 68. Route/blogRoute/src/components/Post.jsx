const React = require("react");
const connect = require("react-redux").connect;
const { DELETE_ARTICLE, LIKE_ARTICLE, COMMENT_ARTICLE} = require("../actions/actions.jsx");
const CommentOutput = require("./CommentOutput.jsx");

const Post = (props) => {

    function handleDeleteClick(event) {
        props.onArticleDelete(+event.target.dataset.id);
    }

    function handleLikeClick(event) {
        props.onArticleLike(+event.currentTarget.dataset.id);
    }

   

    function handleFormSubmit(event){
        event.preventDefault();
        props.onArticleComment(data);
        setData({
            postId: post.id,
            author: "",
            text: ""
        })
    }

    const routeParams = props.match.params;

    const post = props.articles.find((article) => article.id == routeParams.id);

    const postComments = props.comments.filter((comment) => post.id == comment.postId);

    let [data, setData] = React.useState({
        postId: post.id,
        author: "",
        text: ""
    })

    function handleAuthorChange(event) {
        setData({...data, author: event.target.value})
    }

    function handleTextChange(event){
        setData({...data, text: event.target.value})
    }

    return <>
        <div className="blog_posts">
            <div className="card mb-3" key={post.id}>
                    <img src={`/img/${post.picture}`} className="card-img-top" alt={post.name} />
                    <div className="card-body">
                        <h5 className="card-title">#{post.id} {post.name}</h5>
                        <p className="card-text">{post.text} </p>
                        <time>{post.date.toLocaleDateString()}</time>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button className="button_like" data-id={post.id} onClick={handleLikeClick} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                        <span>{post.like}</span>
                        <button type="button" className="btn btn-danger" data-id={post.id} onClick={handleDeleteClick}>Удалить</button>
                    </div>
                    <CommentOutput id={post.id}/>
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
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        articles: state.blog.articles, //blog - редюсер
        comments: state.blog.comments
    }
};

const mapDispatchToProps = dispatch => ({
    onArticleDelete: (articleId) => {
        dispatch({
            type: DELETE_ARTICLE, articleId
        })
    },

    onArticleLike: (id) => {
        dispatch({
            type: LIKE_ARTICLE, id
        })
    },

    onArticleComment: (comment) => {
        dispatch({
            type: COMMENT_ARTICLE, comment
        })
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Post);