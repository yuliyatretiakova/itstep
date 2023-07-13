const React = require("react");

const ArticleList = () => {

    return <>
    <div className="heading ">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-auto title ">
                    <h1>Новости</h1>
                </div>
                <div className="col-auto next ">
                    <a href=" ">Смотреть еще →</a>
                </div>
            </div>
        </div>
    </div>

    <div className="news-list">
        <div className="container">
            <div className="row justify-content-between">

                <div className="col-auto">
                    <div className="news">
                        <div className="date">
                            <img src="/public/assets/img/timetable.png"/>
                            <span>26.02.2021</span>
                        </div>
                        <h2>
                            «НАСТАЎНІЦКАЯ ГАЗЕТА»: ВАЛЯНЦІНА БАГАТЫРОВА: «УНІВЕРСІТЭТ — ПЛЯЦОЎКА ДЛЯ АБ’ЯДНАННЯ»
                        </h2>
                        <p>
                            Сборник научных трудов «Ученые записки УО “ВГУ имени П.М. Машерова”» публикует статьи, содержащие анализ актуальных...
                        </p>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="news">
                        <div className="date">
                            <img src="/public/assets/img/timetable.png"/>
                            <span>16.02.2021</span>
                        </div>
                        <h2>
                            В ВГУ ПРОШЛА НЕДЕЛЯ ПАМЯТИ ПЕТРА МАШЕРОВ
                        </h2>
                        <p>
                            Сборник научных трудов «Ученые записки УО “ВГУ имени П.М. Машерова”» публикует статьи, содержащие анализ актуальных...
                        </p>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="news">
                        <div className="date">
                            <img src="/public/assets/img/timetable.png"/>
                            <span>26.02.2021</span>
                        </div>
                        <h2>
                            «НАСТАЎНІЦКАЯ ГАЗЕТА»: ВАЛЯНЦІНА БАГАТЫРОВА: «УНІВЕРСІТЭТ — ПЛЯЦОЎКА ДЛЯ АБ’ЯДНАННЯ»
                        </h2>
                        <p>
                            Сборник научных трудов «Ученые записки УО “ВГУ имени П.М. Машерова”» публикует статьи, содержащие анализ актуальных...
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>

    </>
}

module.exports = ArticleList;
