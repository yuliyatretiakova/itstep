const React = require("react");

const Form = (props) => {

    let [data, setData] = React.useState({//переменная состояния для формы, чтобы считывать данные, должна по структуре соответствовать структуре объекта actions 
        name: "",
        price: 0,
        quantity: 0,
        favorite: false,
        unit: "л"
    })
    
    function handelFormSubmit(event){
        event.preventDefault();
        props.onProductAdd(data);
        setData({
            name: "",
            price: 0,
            quantity: 0,
            favorite: false,
            unit: "л"
        });
    }

    function handelNameChange(event){
        setData({...data, name: event.target.value});
    }

    function handelPriceChange(event) {
        setData({ ...data, price: event.target.value });
    }

    function handelQuantityChange(event) {
        setData({ ...data, quantity: event.target.value });
    }
    function handelFavoriteChange(event){
        if(event.target.checked){
            setData({...data, favorite: true});
        }else{
            setData({ ...data, favorite: false });
        }
    }
    function handelUnitChange(event){
        setData({...data, unit: event.target.value});
    }

    return (<>
        <form className="blog_form" action="" onSubmit={handelFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                <input type="text" className="form-control" id="name" onChange={handelNameChange} value={data.name} />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Цена</label>
                <input type="text" className="form-control" id="price" onChange={handelPriceChange} value={data.price} />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Количество</label>
                <input type="text" className="form-control" id="quantity" onChange={handelQuantityChange} value={data.quantity} />
            </div>
            <div className="mb-3">
                <label htmlFor="unit" className="form-label">Единица измерения</label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg пример" value={data.unit} id="unit" onChange={handelUnitChange}>
                    <option value="кг">Килограмм</option>
                    <option value="шт">Штука</option>
                    <option value="л">Литр</option>
                </select>
            </div>
            <div className="mb-3">
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" checked={data.favorite} onChange={handelFavoriteChange}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Избранное</label>
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

module.exports = Form;