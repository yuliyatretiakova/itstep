const React = require("react");

const Form = (props) => {

    let [data, setData] = React.useState({//переменная состояния для формы, чтобы считывать данные, должна по структуре соответствовать структуре объекта actions 
        picture: "",
        name: "",
        price: 0,
        quantity: 0,
        favorite: false,
        unit: ""
    })

    let [formError, setFormError] = React.useState({
        picture: "",
        name: "",
        price: "",
        quantity: "",
        unit: ""
    })
    
    function validate(){
        let isValid = true;
        if (data.picture == ""){
            formError.picture = "Выберите картинку";
            isValid = false;
        }
        if (data.name == "") {
            formError.name = "Поле не заполнено";
            isValid = false;
        }
        if (data.price == "") {
            formError.price = "Поле не заполнено";
            isValid = false;
        }
        if (data.quantity == "") {
            formError.quantity = "Поле не заполнено";
            isValid = false;
        }
        if(data.unit == "") {
            formError.unit = "Единица измерения не выбрана";
            isValid = false;
        }
        setFormError({...formError});
        return isValid;
    }

    function handelFormSubmit(event){
        event.preventDefault();
        if(!validate()){
            return false;
        }
        props.onProductAdd(data);
        setData({
            picture: "",
            name: "",
            price: 0,
            quantity: 0,
            favorite: false,
            unit: ""
        });
        setFormError({
            picture: "",
            name: "",
            price: "",
            quantity: "",
            unit: ""
        });
    }

    function handlePictureChange(event){
        setData({...data, picture: event.target.value})
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
                <label htmlFor="image" className="form-label">Картинка</label>
                {(formError.picture != "") ? <input type="text" className="form-control errorFrame" id="image" value={data.picture} onChange={handlePictureChange} /> : <input type="text" className="form-control" id="image" value={data.picture} onChange={handlePictureChange} />}
                {formError.picture != "" && <div className="error">{formError.picture}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                {(formError.name != "") ? <input type="text" className="form-control errorFrame" id="name" value={data.name} onChange={handelNameChange} /> : <input type="text" className="form-control" id="name" value={data.name} onChange={handelNameChange} />}
                {formError.name != "" && <div className="error">{formError.name}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Цена</label>
                {(formError.price != "") ? <input type="text" className="form-control errorFrame" id="price" value={data.price} onChange={handelPriceChange} /> : <input type="text" className="form-control" id="price" value={data.price} onChange={handelPriceChange} />}
                {formError.price != "" && <div className="error">{formError.price}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Количество</label>
                {(formError.quantity != "") ? <input type="text" className="form-control errorFrame" id="quantity" value={data.quantity} onChange={handelQuantityChange} /> : <input type="text" className="form-control" id="quantity" value={data.quantity} onChange={handelQuantityChange} />}
                {formError.quantity != "" && <div className="error">{formError.quantity}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="unit" className="form-label">Единица измерения</label>
                {(formError.unit != "") ? <select className="form-select form-select-lg mb-3 errorFrame" aria-label=".form-select-lg пример" value={data.unit} id="unit" onChange={handelUnitChange}>
                    <option value="">Выберите единицу измерения</option>
                    <option value="кг">Килограмм</option>
                    <option value="шт">Штука</option>
                    <option value="л">Литр</option>
                </select> : <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg пример" value={data.unit} id="unit" onChange={handelUnitChange}>
                    <option value="">Выберите единицу измерения</option>
                    <option value="кг">Килограмм</option>
                    <option value="шт">Штука</option>
                    <option value="л">Литр</option>
                </select>}
                {formError.unit != "" && <div className="error">{formError.unit}</div>}
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