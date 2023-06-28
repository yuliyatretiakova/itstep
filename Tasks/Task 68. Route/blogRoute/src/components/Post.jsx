const React = require("react");
const connect = require("react-redux").connect;
const { DELETE_ARTICLE, LIKE_ARTICLE} = require("../actions/actions.jsx");
const CommentOutput = require("./CommentOutput.jsx");
const CommentForm = require("./CommentForm.jsx");

const Post = (props) => {

    function handleDeleteClick(event) {
        props.onArticleDelete(+event.target.dataset.id);
    }

    function handleLikeClick(event) {
        props.onArticleLike(+event.currentTarget.dataset.id);
    } 

    const routeParams = props.match.params;

    const post = props.articles.find((article) => article.id == routeParams.id);  

    return <>
        <div className="blog_posts">
            <div className="card mb-3" key={post.id}>
                    <img src={`/img/${post.picture}`} className="card-img-top" alt={post.name} />
                    <div className="card-body">
                        <h5 className="card-title">#{post.id} {post.name}</h5>
                        <p className="card-text">{post.text} </p>
                        <time>{post.date.toLocaleDateString()}</time>
                    </div>
                    <div className="card-footer text-body-secondary card_footer-style">
                    <div className="card_footer-style_like">
                        <div className="card-footer-style_like__button">
                            <button className="button_like" data-id={post.id} onClick={handleLikeClick} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                            </button>
                        </div>   
                        <div className="card-footer_like__count">{post.like}</div>
                        </div>
                    <div className="card-footer-style-style_delete">
                            <button type="button" className="btn btn-danger" data-id={post.id} onClick={handleDeleteClick}>Удалить</button>
                        </div>   
                    </div>
                    <CommentOutput id={post.id}/>
                    <CommentForm id={post.id} />
                    
            </div>
        </div>
    </>
}

const mapStateToProps = state => {
    return {
        articles: state.blog.articles, //blog - редюсер
      
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
    }
 
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Post);