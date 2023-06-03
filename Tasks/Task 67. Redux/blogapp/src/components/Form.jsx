const React = require("react");

const Form = (props) => {
    let [data, setData] = React.useState({
        id: 0,
        name: "",
        text: "",
        picture:"Flower frog.jpg"
    })

    function handleFormSubmit (event){
        event.preventDefault();
        props.onArticleAdd(data);
        setData({
            name: "",
            text: "",
            picture: "Flower frog.jpg"
        });
    }

    function handleNameChange(event){
        setData({ ...data, name: event.target.value })
    }

    function handleTextChange(event) {
        setData({ ...data, text: event.target.value })
    }

    function handlePictureChange(event) {
        setData({ ...data, picture: event.target.value })
    }

    function handleIdChange(event){
        setData({...data, id: event.target.value})
    }

    return (<>
        <form class="blog_form" action="" onSubmit={handleFormSubmit}>
            <div class="mb-3">
                <label for="name" class="form-label">Название</label>
                <input type="text" class="form-control" id="name" value={data.name} onChange={handleNameChange} />
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Текст</label>
                <textarea class="form-control" id="text" rows="3" value={data.text} onChange={handleTextChange} />
            </div>
            <div class="mb-3">
                <label for="image" class="form-label">Картинка</label>
                <input type="text" class="form-control" id="image" value={data.picture} onChange={handlePictureChange} />
            </div>
            <div class="mb-3">
                <input type="hidden" id="id" value={data.id} onChange={handleIdChange} />
                <button type="submit" class="btn btn-primary">Добавить</button>
            </div>
        </form>
    </>)
}

module.exports = Form;