const React = require("react");

const SearchView = () => {

    return <>
    <div className="banner-main no-search">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-lg-5 col-lg-6  col-md-6 col-12">
                    <div className="logo">
                        <img src="/public/assets/img/logo.png"/>
                    </div>
                    <div className="title">
                        <h1>Сайт периодических изданий ВГУ имени П. М. Машерова</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="search-line">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-12">
                    <form action="form-control ">
                        <div className="edit ">
                            <input type="text " className="input-search " required="required"/>
                            <div className="search-img " id="search-img "><img src="/public/assets/img/header/search.png"/></div>
                        </div>
                        <button type="button " className="btn btn-search ">Поиск</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


    <div className="search-publications">
        <div className="container ">
            <div className="row justify-content-between ">

                <div className="col-md-12">

                    <div className="publications-download-full">
 
                        <h1>Поиск по публикациям </h1>

                        <div className="publication-page">
                            <div className="publication-body">
                                <div className="journal">
                                    <span>Вестник Витебского государственного университета</span>
                                </div>
                                <div className="title">
                                    <h2>Влияние количества алгебраических чисел на величину дискриминантов и производных в корне</h2>
                                </div>
                                <div className="autors">
                                    <span>А.Ю.Харин | A.У.Новик| ... |А.Ю. Петров</span>
                                </div>
                            </div>
                            <div className="publication-footer">
                                <div className="date-time ">
                                    <span>06.09.2021</span>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>HTML</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>PDF</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-page">
                            <div className="publication-body">
                                <div className="journal">
                                    <span>Вестник Витебского государственного университета</span>
                                </div>
                                <div className="title">
                                    <h2>Влияние количества алгебраических чисел на величину дискриминантов и производных в корне</h2>
                                </div>
                                <div className="autors">
                                    <span>А.Ю.Харин | A.У.Новик| ... |А.Ю. Петров</span>
                                </div>
                            </div>
                            <div className="publication-footer">
                                <div className="date-time ">
                                    <span>06.09.2021</span>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>HTML</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>PDF</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-page">
                            <div className="publication-body">
                                <div className="journal">
                                    <span>Вестник Витебского государственного университета</span>
                                </div>
                                <div className="title">
                                    <h2>Влияние количества алгебраических чисел на величину дискриминантов и производных в корне</h2>
                                </div>
                                <div className="autors">
                                    <span>А.Ю.Харин | A.У.Новик| ... |А.Ю. Петров</span>
                                </div>
                            </div>
                            <div className="publication-footer">
                                <div className="date-time ">
                                    <span>06.09.2021</span>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>HTML</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>PDF</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="publication-page">
                            <div className="publication-body">
                                <div className="journal">
                                    <span>Вестник Витебского государственного университета</span>
                                </div>
                                <div className="title">
                                    <h2>Влияние количества алгебраических чисел на величину дискриминантов и производных в корне</h2>
                                </div>
                                <div className="autors">
                                    <span>А.Ю.Харин | A.У.Новик| ... |А.Ю. Петров</span>
                                </div>
                            </div>
                            <div className="publication-footer">
                                <div className="date-time ">
                                    <span>06.09.2021</span>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>HTML</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                                <div className="download">
                                    <a href="">
                                        <span>PDF</span>
                                        <img src="/public/assets/img/journals/download.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>

    </>;

}


module.exports = SearchView;