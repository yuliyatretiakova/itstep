const React = require("react");
const connect = require("react-redux").connect;
const {FAVORITE_PRODUCT, UNFAVORITE_PRODUCT} = require("../actions/actions.jsx");

const Detail = (props) => {
    
    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const product = props.products.find((product) => product.id == routeParams.id);
    
    function handleFavoriteClick(event){
        props.onProductUnfavorite(+event.currentTarget.dataset.id);
    }

    function handleUnfavoriteClick(event){
        props.onProductFavorite(+event.currentTarget.dataset.id);
    }
    return <>
            <div> {product.id}</div>
            <div> {product.name}</div>
            <div> {product.price}</div>
            <div> {product.quantity}</div>
            <div>
                {product.favorite == true &&
                                        <button className="button_favorite" data-id={product.id} onClick={handleFavoriteClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                            </svg>
                                        </button>}
                                        {product.favorite == false &&
                                        <button className="button_unfavorite" data-id={product.id} onClick={handleUnfavoriteClick}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                            </svg>
                                        </button>}               
            </div>
        </>
}

const mapStateToProps = state => {
    return {
        products: state.product.products //product -  название reducer, описанного в /reducer/index.jsx, products - массив продуктов
    }
};

const mapDispatchToProps = dispatch => ({
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(Detail);