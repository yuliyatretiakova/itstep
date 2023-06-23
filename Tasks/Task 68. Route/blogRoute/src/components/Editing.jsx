const React = require("react");
const connect = require("react-redux").connect;
const {EDIT_ARTICLE} = require("../actions/actions.jsx");

const Editing = (props) => {

    const routeParams = props.match.params; //props.match.params - объект с параметрами адреса
    // props.match.params - стандартное обращение к параметрам маршрута
    // props.match.params.id - id, который передается в адресе

    const article = props.articles.find((article) => article.id == routeParams.id);
    
    let [data, setData] = React.useState({
        name: article.name,
        text: article.text,
        picture: article.picture
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onArticleEdit(article.id, data);
        setData({
            name: "",
            text: "",
            picture: ""
        });
        props.history.push("/blog")
    }

    function handleNameChange(event) {
        setData({ ...data, name: event.target.value })
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value })
    }

    function handlePictureChange(event) {
        setData({ ...data, picture: event.target.value })
    }

    return (<>
        <form className="blog_form" action="" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Название</label>
                <input type="text" className="form-control" id="name" value={data.name} onChange={handleNameChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label">Текст</label>
                <textarea className="form-control" id="text" rows="3" value={data.text} onChange={handleTextChange} />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Картинка</label>
                <input type="text" className="form-control" id="image" value={data.picture} onChange={handlePictureChange} />
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary">Сохранить</button>
                <button type="submit" className="btn btn-secondary" onClick={() => { props.history.push("/blog")}}>Отменить</button>
            </div>
        </form>
    </>)
}

const mapStateToProps = state => {
    return {
        articles: state.blog.articles
    }
};

const mapDispatchToProps = dispatch => ({
    onArticleEdit: (id, article) => {
        dispatch({
            type: EDIT_ARTICLE, id, article
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Editing);