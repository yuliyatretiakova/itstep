const React = require("react");

const UserInfo = (props) => {

    return <>
        <div>
            Меня зовут {props.user.name}. Мне {props.user.age} лет.
        </div>
    </>
}

module.exports = UserInfo;