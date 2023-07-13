const React = require("react");

const Banner = () => {

    return <>
    <div className="banner-main">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-lg-5 col-lg-6  col-md-6 col-12">
                    <div className="logo">
                        <img src="/public/assets/img/logo.png"/>
                    </div>
                    <div className="title">
                        <h1>Сайт периодических изданий ВГУ имени П. М. Машерова</h1>
                    </div>
                    <div className="search">
                        <form action="form-control ">
                            <div className="edit ">
                                <input type="text " className="input-search " required="required "/>
                                <div className="search-img " id="search-img "><img src="/public/assets/img/header/search.png "/></div>
                            </div>
                            <button type="button " className="btn btn-search ">Поиск</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

module.exports = Banner;

