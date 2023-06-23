const React = require("react");
const connect = require("react-redux").connect;
const {EDIT_PRODUCT} = require("../actions/actions.jsx");

const FormEdit = (props) => {

    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const product = props.products.find((product) => product.id == routeParams.id);

    let [data, setData] = React.useState({
        name: product.name,
        price: product.price,
        quantity: product.quantity
    }) 

    function handleFormSubmit(event){
        event.preventDefault();
        props.onProductEdit(product.id, data);
        setData({
            name: "",
            price: 0,
            quantity: 0
        });
        props.history.push("/product/") //редирект
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
                            <button type="submit" className="btn btn-primary">Сохранить</button>
                            <button type="button" className="btn btn-secondary" onClick={()=>{props.history.push("/product/")}}>Отмена</button>
                        </div>
                    </form>
    </>)
}

const mapStateToProps = state => {
    return {
        products: state.product.products
    }
};

const mapDispatchToProps = dispatch => ({
    onProductEdit: (id, product) => {
        dispatch({
            type: EDIT_PRODUCT, id, product
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(FormEdit);