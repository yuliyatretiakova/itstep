const React = require("react");
const connect = require("react-redux").connect;
const {push} = require("connected-react-router");

const Menu = (props) => {

    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <ul className="navbar-nav">
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
            </div>
        </nav>
    </>;
}

module.exports = connect(null, {push})(Menu);