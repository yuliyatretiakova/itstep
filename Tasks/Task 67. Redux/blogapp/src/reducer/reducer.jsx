const reducer = (state = {}, action) => {

    switch(action.type){
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
                picture: action.article.picture
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

    }
    return state;
}
module.exports = reducer;