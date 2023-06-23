const React = require("react");
const connect = require("react-redux").connect;
const {ADD_ARTICLE} = require("../actions/actions.jsx");

const Form = (props) => {
    let [data, setData] = React.useState({
        name: "",
        text: "",
        picture: ""
    })

    function handleFormSubmit(event) {
        event.preventDefault();
        props.onArticleAdd(data);
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
                <button type="submit" className="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => ({
    onArticleAdd: (article) => {
        dispatch({
            type: ADD_ARTICLE, article
        })
    }
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(Form);