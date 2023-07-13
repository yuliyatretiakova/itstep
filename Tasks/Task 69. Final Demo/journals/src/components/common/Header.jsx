const React = require("react");
const connect = require("react-redux").connect;

const Header = (props) => {

    return     <div className="header">
        <nav className="navigation">
            <div className="container">
                <div className="row justify-content-between">
                    <div id="toggle-menu" className="col-1 toggle-menu">
                        <img src="/public/assets/img/header/menu.png" />
                    </div>
                    <div className=" col-6 menu ">
                        <ul>
                            <li><a href=" " className="active">Главная</a></li>
                            <li><a href=" ">Поиск</a></li>
                            <li><a href=" ">Журналы</a></li>
                            <li><a href=" ">Новости</a></li>
                            <li><a href=" ">Публикации</a></li>
                        </ul>
                    </div>

                    <div className="col-1 offset-2 col-md-1 offset-md-6 col-lg-2 offset-lg-1 menu-entry ">
                        {(props.login == "") && <>
                                <a href=" " className="registration ">Регистрация</a>
                                <a href=" " className="signin ">Вход</a>
                            </>
                        }
                        {(props.login != "") && <>
                                    <div>{props.login}</div>
                            </>
                        }
                    </div>
                    <div className="col-3 col-md-1 lang-switcher ">
                        <ul className="link ">
                            <li className="ru ">
                                <a href=" ">RU </a>
                            </li>
                            <li className="delimetr ">|</li>
                            <li className="en ">
                                <a href=" ">EN</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}

const mapStateToProps = state => {
    return {
        login: state.user.currentUser
    }
};


module.exports = connect(mapStateToProps, null)(Header);