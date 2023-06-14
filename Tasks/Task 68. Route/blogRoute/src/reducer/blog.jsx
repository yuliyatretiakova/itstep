const reducer = (state = {}, action) => {

    switch (action.type) {
        case "INIT":
            return {
                ...state,
                articles: action.articles,
                lastArticleId: action.lastArticleId
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

    }
    return state;
}
module.exports = reducer;