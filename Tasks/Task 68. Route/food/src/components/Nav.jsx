const React = require("react");
const {Link} = require("react-router-dom");

const Nav = (props) => {
    return  <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/">Главная</Link>
                </li>
                <li className="nav-item">
                    <Link to="/product">Продукты</Link>
                </li>
                <li className="nav-item">
                    <Link to="/product/add">Добавить</Link>
                </li>
            </ul>;   
}

module.exports = Nav;