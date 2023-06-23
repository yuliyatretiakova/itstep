const reducer = (state = {}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                ...state,
                articles: action.articles,
                comments: action.comments,
                lastArticleId: action.lastArticleId,
                lastCommentId: action.lastCommentId
            }
        case "ARTICLE_ADD":
            let newId = ++state.lastArticleId;
            let newArticle = {
                id: newId,
                name: action.article.name,
                text: action.article.text,
                picture: action.article.picture,
                date: new Date(),
                like: 0
            };
            return {
                ...state,
                articles: [...state.articles, newArticle],
                lastArticleId: newId
            };
        case "ARTICLE_DELETE":
            return {
                ...state,
                articles: state.articles.filter((item) => item.id != action.articleId)
            }
        case "ARTICLE_LIKE":
            return {
                ...state,
                articles: state.articles.map((item) => {
                    if (item.id == action.id) {
                        item.like++;
                    }
                    return item;
                })
            }
        case "ARTICLE_EDIT":
            return {
                ...state,
                articles: state.articles.map((item) => {
                    if (item.id == action.id) {
                        item.name = action.article.name;
                        item.text = action.article.text;
                        item.picture = action.article.picture;
                    }
                    return item;
                })
            }
        case "ARTICLE_COMMENT":
            let newCommentId = ++state.lastCommentId;
            let newComment = {
                id: newCommentId,
                postId: action.comment.postId,
                author: action.comment.author,
                text: action.comment.text
            };
            return {
                ...state,
                comments: [...state.comments, newComment],
                lastCommentId: newCommentId
            };

    }
    return state;
}
module.exports = reducer;