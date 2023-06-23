const React = require("react");
const UserInfo = require("./UserInfo.jsx");
const FormAdd = require("./FormAdd.jsx");
const List = require("./List.jsx");
const {Route, Switch} = require("react-router");
const Detail = require("./Detail.jsx");
const Header = require("./Header.jsx");
const FormEdit = require("./FormEdit.jsx");


const AppView = () => {

    return <div>
        <Header/>
        <Switch> 
            <Route exact path="/" component={UserInfo}/>
            <Route path="/product/add" component={FormAdd}/>
            <Route path="/product/edit/:id" component={FormEdit}/>
            <Route path="/product/:id" component={Detail}/> {/*:id - параметр адреса*/}
            <Route path="/product/" component={List}/>
        </Switch>
    </div>;

}


module.exports = AppView;