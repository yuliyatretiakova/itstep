const React = require("react");
const connect = require("react-redux").connect;
const {DELETE_PRODUCT, FAVORITE_PRODUCT, UNFAVORITE_PRODUCT} = require("../actions/actions.jsx");

const List = (props) => {
    
    function handleButtonClick(event){     
        props.onProductDelete(+event.currentTarget.dataset.id);
    }

    function handleFavoriteClick(event){
        props.onProductUnfavorite(+event.currentTarget.dataset.id);
    }

    function handleUnfavoriteClick(event){
        props.onProductFavorite(+event.currentTarget.dataset.id);
    }

    function getResult(){
        return props.products.reduce((sum, product) => sum + product.price*product.quantity, 0);
    }

    function getReviewsCount(id){ // id - id продукта
        return props.reviews.filter((review) => review.productId == id).length;
    }

    return <>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Избранное</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Отзывы</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((item, index)=>{
                        return  <tr key={item.id}>
                                    <th scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        {item.favorite == true &&
                                        <button className="button_favorite" data-id={item.id} onClick={handleFavoriteClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                        </button>}
                                        {item.favorite == false &&
                                        <button className="button_unfavorite" data-id={item.id} onClick={handleUnfavoriteClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg>
                                        </button>}
                                    </td>
                                    <td  align="right">{item.price*item.quantity}</td>
                                    <td>{getReviewsCount(item.id)}</td>
                                    <td>
                                        <button className="button_trash" data-id={item.id} onClick={handleButtonClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                            </svg> 
                                        </button>

                                        <button className="button_view" onClick={()=>{props.history.push(`/product/${item.id}`)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                        </button>
                                        <button className="button_edit" onClick={()=>{props.history.push(`/product/edit/${item.id}`)}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                    })
                }
                <tr>
                    <td colSpan="5" align="right">Итого:</td>
                    <td align="right">{getResult()}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </>
}

const mapStateToProps = state => {
    return {
        products: state.product.products, //product -  название reducer, описанного в /reducer/index.jsx, products - массив продуктов
        reviews: state.product.reviews
    }
};

const mapDispatchToProps = dispatch => ({
    onProductDelete: (productId) => {
        dispatch({
            type: DELETE_PRODUCT, productId
        })
    },
    onProductUnfavorite: (id) => {
        dispatch({
            type: UNFAVORITE_PRODUCT, id
        })
    },
    onProductFavorite: (id) => {
        dispatch({
            type: FAVORITE_PRODUCT, id
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(List);