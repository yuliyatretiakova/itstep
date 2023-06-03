const reducer = (state = {}, action) => {
    
    switch(action.type){
        case "INIT":
            return {
                ...state,
                products: action.products,
                user: action.user,
                lastIdProduct: action.lastIdProduct
            }
        case "PRODUCT_ADD":
            let newId = ++state.lastIdProduct;
            let newProduct = {
                id: newId,
                name: action.product.name,
                price: action.product.price,
                quantity: action.product.quantity,
                favorite: action.product.favorite,
                unit: action.product.unit
            };
            return {
                ...state,//возвращаем старый объект state
                products: [...state.products, newProduct],//указываем, что поменяли(массив Products)
                lastIdProduct: newId//перезаписываем последний id
            };
        case "PRODUCT_DELETE":
            return{
                ...state,
                products:state.products.filter((item) => item.id != action.productId)//изменяем массив products при помощи метода filter с условием, что id продукта массива не равен id продукта переданного для удаления
            };
        case "PRODUCT_LIKE":
            return {
                ...state,
                products: state.products.map((item) => {
                    if(item.id == action.id){
                        item.favorite = true;
                    }
                    return item;
                })
               
            };
        case "PRODUCT_DISLIKE":
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id == action.id) {
                        item.favorite = false;
                    }
                    return item;
                })

            };
        case "PRODUCT_EDIT":
    }
    return state;
}
module.exports = reducer;