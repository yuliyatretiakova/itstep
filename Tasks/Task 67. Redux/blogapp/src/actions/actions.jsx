/*
 *ARTICLE_ADD - добавить публикацию 
 *ARTICLE_DELETE - удалить публикацию
 *ARTICLE_EDIT - редактировать публикацию 
 *ARTICLE_LIKE - поставить "like" публикации
 */

 const addArticle = (article) => {
    return {
        type: "ARTICLE_ADD",
        article
    }
 };

 const deleteArticle = (articleId) => {
    return {
        type: "ARTICLE_DELETE",
        articleId
    }
 };

 const editArticle = (id, article) => {
    return {
        type: "ARTICLE_EDIT",
        id,
        article
    }
 };

 const likeArticle = (id) => {
    return {
        type: "ARTICLE_LIKE",
        id
    }
 }

module.exports = { addArticle, deleteArticle, editArticle, likeArticle}