const React = require("react");

const Footer = () => {

    return     <div className="footer ">
        <div className="container ">
            <div className="row justify-content-center start-footer ">
                <div className="col-12 ">
                    <div className="row justify-content-between ">
                        <div className="col-auto ">
                            <p className="title ">Контакты</p>
                        </div>
                    </div>
                    <div className="row justify-content-between ">
                        <div className="col-sm-12 col-lg-3 ">
                            <div className="info ">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/human.png"/>
                                </div>
                                <div className="content ">
                                    <p>Ответсвенный секретарь:</p>
                                    <p className="fio ">Пугач Валентина Леонидовна</p>
                                </div>
                            </div>
                            <div className="info ">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/address.png"/>
                                </div>
                                <div className="content ">
                                    <p>Московский проспект, д. 33, каб. 202, 210038, г. Витебск, Республика Беларусь</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 ">
                            <div className="info info-min">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/telephone.png"/>
                                </div>
                                <div className="content ">
                                    <p>Тел.: +375 (33) 398-50-51</p>
                                </div>
                            </div>
                            <div className="info info-min">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/telephone.png"/>
                                </div>
                                <div className="content ">
                                    <p>Тел.: +375 (212) 58-48-93</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-3 ">
                            <div className="info info-min">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/email.png"/>
                                </div>
                                <div className="content ">
                                    <p>Факс: +375 (212) 37-49-59</p>
                                </div>
                            </div>
                            <div className="info info-min">
                                <div className="picture ">
                                    <img src="/public/assets/img/foother/email.png"/>
                                </div>
                                <div className="content ">
                                    <p>E-mail: nauka@vsu.by</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container ">
            <div className="row justify-content-between delimetr ">
            </div>
            <div className="row justify-content-between end-footer ">
                <div className="col-sm-6 col-xs-12 social ">
                    <ul className="link ">
                        <li className="fb ">
                            <a target="_blank " href=" ">
                                <img src="/public/assets/img/foother/fb.png" alt=" "/>
                            </a>
                        </li>
                        <li className="tw ">
                            <a target="_blank " href=" ">
                                <img src="/public/assets/img/foother/tw.png" alt=" "/>
                            </a>
                        </li>
                        <li className="in ">
                            <a target="_blank " href=" ">
                                <img src="/public/assets/img/foother/in.png" alt=" "/>
                            </a>
                        </li>
                        <li className="yt ">
                            <a target="_blank " href=" ">
                                <img src="/public/assets/img/foother/yt.png" alt=" "/>
                            </a>
                        </li>
                        <li className="vk ">
                            <a target="_blank " href=" ">
                                <img src="/public/assets/img/foother/vk.png" alt=" "/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-auto col-xs-12 lang-switcher ">
                    <ul className="link ">
                        <li className="ru active ">
                            <a href=" ">RU</a>
                        </li>
                        <li className="en ">
                            <a href=" ">EN</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}

module.exports = Footer;