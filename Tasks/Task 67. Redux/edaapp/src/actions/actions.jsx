/*
 * PRODUСT_ADD - добавить продукт
 * PRODUCT_DELETE - удалить продукт
 * PRODUCT_EDIT - редактировать продукт
 */

const addProduct = (product) => {
    return {
        type: "PRODUCT_ADD",
        product
        /* структура объекта product{
            name:"",
            price: 0,
            quantity: 0
        }*/
    }
};

const deleteProduct = (productId) => {
    return {
        type: "PRODUCT_DELETE",
        productId
    }
};

const editProduct = (id, product) => {
    return {
        type: "PRODUCT_EDIT",
        id,
        product
    }
    
};

const likeProduct = (id) => {
    return {
        type: "PRODUCT_LIKE",
        id
    }
};

const dislikeProduct = (id) => {
    return {
        type: "PRODUCT_DISLIKE",
        id
    }
};


module.exports = { addProduct, deleteProduct, likeProduct, dislikeProduct, editProduct};