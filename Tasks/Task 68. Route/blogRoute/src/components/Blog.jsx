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
    function numberOfComments (postId) {
        let number = props.comments.filter((item) => item.postId == postId).length;
        return number;
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
                    <div className="card-footer text-body-secondary card_footer-style">
                        <div className="card_footer-style_like">
                            <div className="card-footer-style_like__button">
                                <button className="button_like" data-id={item.id} onClick={handleLikeClick} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="card-footer_like__count">
                                <div>{item.like}</div>
                            </div>
                        </div>
                        <div className="card_footer-style_comments">
                            <div>{numberOfComments(item.id)} комментариев</div>
                        </div>
                        <div className="card_footer-style_more">
                            <button type="button" className="btn btn-info" onClick={() => { props.history.push("/blog/" + item.id) }}>Подробнее</button>
                        </div>
                        <div className="card_footer-style_edit">
                            <button type="button" className="btn btn-secondary" onClick={() => { props.history.push("/edit/" + item.id) }}>Редактировать</button>
                        </div>
                        <div className="card_footer-style_delete">
                            <button type="button" className="btn btn-danger" data-id={item.id} onClick={handleDeleteClick}>Удалить</button>
                        </div>   
                    </div>
                </div>
            })}
        </div>
    </>
}

const mapStateToProps = state => {
    return{
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
    }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Blog);