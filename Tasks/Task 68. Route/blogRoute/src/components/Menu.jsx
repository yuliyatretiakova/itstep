const React = require("react");
const connect = require("react-redux").connect;
const {push} = require("connected-react-router");

const Menu = (props) => {

    return <>
        <ul className="nav navbar-nav">
            <li className="nav-item" onClick={() => { props.push("/") }}>
                Главная
            </li>
            <li className="nav-item" onClick={() => { props.push("/form") }}>
                Форма
            </li>
            <li className="nav-item" onClick={() => { props.push("/blog") }}>
                Блог
            </li>
        </ul>
    </>;
}

module.exports = connect(null, {push})(Menu);