const connect = require("react-redux").connect;
const actions = require("../actions/actions.jsx");
const React = require("react");
const UserInfo = require("./UserInfo.jsx");
const Form = require("./Form.jsx");
const List = require("./List.jsx");

const AppView = (props) => {//props - мы помещаем в них параметры компонентов, в данном случае данные из хранилища и действия;
    return <>
        <UserInfo user={props.currentUser} />
        <Form onProductAdd={props.addProduct}/>
        <List products={props.products} onProductDelete={props.deleteProduct} onProductLike={props.likeProduct} onProductDislike={props.dislikeProduct} />
    </>
   
};

const mapStateToProps = (state) => {//функция, которая вызывает из хранилища данные, которыми мы будем пользоваться
    return{
        products: state.products,
        currentUser: state.user
    }
};

module.exports = connect(mapStateToProps, actions)(AppView);// метод connect объединяет функцию, экшены(список действий, которые мы описали) и компонент (AppView)