const React = require("react");

const JournalList = () => {

    return <>
    <div className="heading ">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-auto title ">
                    <h1>Журналы</h1>
                </div>
            </div>
        </div>
    </div>

    <div className="journal-list">
        <div className="container ">
            <div className="row justify-content-between ">

                <div className="col-12">

                    <div className="elem">
                        <div className="photo">
                            <img src="/public/assets/img/journals/jour1.jpg" alt="image"/>
                        </div>

                        <div className="details">
                            <h2>Вестник Витебского государственного университета</h2>
                            <p className="delimetr"></p>
                            <p>Целью журнала «Веснік Віцебскага дзяржаўнага ўніверсітэта» является объективное представление результатов фундаментальных и прикладных исследований в сфере биологии, математики и педагогики, создание и поддержка научной площадки
                                для профессионального конструктивного обсуждения вопросов о научных достижениях и ориентирах в дальнейшем развитии. </p>
                            <div className="more">
                                <a href="">Посмотреть журнал</a>
                            </div>
                        </div>
                    </div>

                    <div className="elem">
                        <div className="photo">
                            <img src="/public/assets/img/journals/jour3.jpg" alt="image"/>
                        </div>

                        <div className="details">
                            <h2>Право. Экономика. Психология</h2>
                            <p className="delimetr"></p>
                            <p>Научно-практический журнал «Право. Экономика. Психология» публикует статьи, посвященные правовым проблемам всех направлений, актуальным аспектам в области экономики и психологии, обзорные научные материалы, сообщения, рецензии
                                и др. К публикации в журнале приглашаются отечественные и зарубежные исследователи. Целевая аудитория — отечественные и зарубежные ученые, докторанты, </p>
                            <div className="more">
                                <a href="">Посмотреть журнал</a>
                            </div>
                        </div>
                    </div>

                    <div className="elem">
                        <div className="photo">
                            <img src="/public/assets/img/journals/jour2.jpg" alt="image"/>
                        </div>

                        <div className="details">
                            <h2>Ученые записки УО "ВГУ имени П.М. Машерова"</h2>
                            <p className="delimetr"></p>
                            <p>Сборник научных трудов «Ученые записки УО “ВГУ имени П.М. Машерова”» публикует статьи, содержащие анализ актуальных для современной науки, проблем и результаты научных исследований специалистов в исторических, философских и
                                филологических областях науки и призван содействовать распространению результатов научных исследований и созданию дискуссионного поля для обмена научными достижениями и исследовательским</p>
                            <div className="more">
                                <a href="">Посмотреть журнал</a>
                            </div>
                        </div>
                    </div>

                    <div className="elem">
                        <div className="photo">
                            <img src="/public/assets/img/journals/jour4.jpg" alt="image"/>
                        </div>

                        <div className="details">
                            <h2>Искусство и культура</h2>
                            <p className="delimetr"></p>
                            <p>Целью журнала «Искусство и культура» является знакомство читателей с новейшими разработками отечественных и зарубежных ученых по проблемам теории и истории культуры и искусства, а также методик обучения в области художественной
                                практики, создание и поддержка научной площадки для обмена мнений и дискуссий по основным проблемам художественной культуры, что должно содействовать расширению духовного потенциала отечественной культуры, а также усилению
                                кросс-культурных взаимодействий.</p>
                            <div className="more">
                                <a href="">Посмотреть журнал</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </>
}

module.exports = JournalList;
