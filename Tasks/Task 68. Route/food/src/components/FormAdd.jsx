const React = require("react");
const connect = require("react-redux").connect;
const {ADD_PRODUCT} = require("../actions/actions.jsx");

const FormAdd = (props) => {

    let [data, setData] = React.useState({
        name: "",
        price: 0,
        quantity: 0,
        favorite: false
    }) 

    function handleFormSubmit(event){
        event.preventDefault();
        props.onProductAdd(data);
        setData({
            name: "",
            price: 0,
            quantity: 0,
            favorite: false 
        });
        
    }

    function handleNameChange(event){
        setData({...data, name: event.target.value});
    }

    function handlePriceChange(event){
        setData({...data, price: event.target.value});
    }

    function handleQuantityChange(event){
        setData({...data, quantity: event.target.value});
    }

    function handleFavoriteChange(event){
        setData({...data, favorite: event.target.checked});
    }
    return (<>
                    <form className="blog_form" action="" onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Название</label>
                            <input type="text" className="form-control" id="name" onChange={handleNameChange} value={data.name}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Цена</label>
                            <input type="text" className="form-control" id="price" onChange={handlePriceChange} value={data.price}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Количество</label>
                            <input type="text" className="form-control" id="quantity" onChange={handleQuantityChange}  value={data.quantity}/>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="favorite" onChange={handleFavoriteChange} checked={data.favorite}/>
                                <label className="form-check-label" htmlFor="favorite">
                                    Избранное
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Добавить</button>
                        </div>
                    </form>
    </>)
}

const mapStateToProps = state => {
    return {
        user: state.product.user
    }
};

const mapDispatchToProps = dispatch => ({
    onProductAdd: (product) => {
        dispatch({
            type: ADD_PRODUCT, product
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormAdd);