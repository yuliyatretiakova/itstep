const React = require("react");

const NewsList = () => {

    return <>

    <div className="heading ">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-auto title ">
                    <h1>Публикации</h1>
                </div>
                <div className="col-auto next ">
                    <a href=" ">Смотреть еще →</a>
                </div>
            </div>
        </div>
    </div>

    <div className="publication-list">
        <div className="container ">
            <div className="row justify-content-between ">

                <div className="col-auto ">
                    <div className="publication-page background-color-1">
                        <div className="head-publication ">
                            <div className="journal ">
                                <span>Вестник Витебского государственного университета</span>
                            </div>
                            <div className="date-time ">
                                <span>26.02.2021</span>
                            </div>
                        </div>
                        <div className="body-publication ">
                            <h2>Асимптотический анализ робастности последовательных статистических критериев</h2>
                            <span>А.Ю.Харин, A.У.Новик, А.А. Никитин, А.Т. Смирнов</span>
                        </div>
                    </div>
                </div>

                <div className="col-auto ">
                    <div className="publication-page background-color-2">
                        <div className="head-publication ">
                            <div className="journal ">
                                <span>Вестник Витебского государственного университета</span>
                            </div>
                            <div className="date-time ">
                                <span>06.09.2021</span>
                            </div>
                        </div>
                        <div className="body-publication ">
                            <h2>Влияние количества алгебраических чисел на величину дискриминантов и производных в корне</h2>
                            <span>А.Ю.Харин, A.У.Новик, 
                            А.А. Никитин, А.Т. Смирнов, А.Ю.Харин, A.У.Новик, 
                            А.А. Никитин, А.Т. Смирнов</span>
                        </div>
                    </div>
                </div>

                <div className="col-auto ">
                    <div className="publication-page background-color-3">
                        <div className="head-publication ">
                            <div className="journal ">
                                <span>Вестник Витебского государственного университета</span>
                            </div>
                            <div className="date-time ">
                                <span>10.11.2021</span>
                            </div>
                        </div>
                        <div className="body-publication ">
                            <h2>Равномерная полная управляемость линейных дискретных систем с изменяющейся структурой</h2>
                            <span>А.Ю.Харин, A.У.Новик, 
                            А.А. Никитин, А.Т. Смирнов,
                            А.Ю. Петров</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
}

module.exports = NewsList;
