const React = require("react");
const connect = require("react-redux").connect;
const {DELETE_ARTICLE, LIKE_ARTICLE} = require("../actions/actions.jsx");

const Blog = (props) => {
    //props.articles, props.onArticleDelete

    function handleDeleteClick(event) {
        props.onArticleDelete(+event.target.dataset.id);
    }

    function handleLikeClick(event) {
        props.onArticleLike(+event.currentTarget.dataset.id);
    }

    return <>
        <div className="blog_posts">
            {props.articles.map((item) => {
                return <div className="card mb-3" key={item.id}>
                    <img src={`/img/${item.picture}`} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">#{item.id} {item.name}</h5>
                        <p className="card-text">{item.text} </p>
                        <time>{item.date.toLocaleDateString()}</time>
                    </div>
                    <div className="card-footer text-body-secondary">
                        <button className="button_like" data-id={item.id} onClick={handleLikeClick} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                        </button>
                        <span>{item.like}</span>
                        <button type="button" className="btn btn-danger" data-id={item.id} onClick={handleDeleteClick}>Удалить</button>
                    </div>
                </div>
            })}
        </div>
    </>
}

const mapStateToProps = state => {
    return{
        articles: state.blog.articles //blog - редюсер
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
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Blog);