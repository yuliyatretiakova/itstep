const React = require("react");
const connect = require("react-redux").connect;
const {SIGNUP} = require("../../actions/action.jsx") 

const SignUp = (props) => {

    const [data, setData] = React.useState({
        login: "",
        password: ""
    })

    function handleLoginChange(event){
        setData({...data, login: event.target.value});
    
    }
    function handlePasswordChange(event){
        setData({...data, password: event.target.value});
    }

    function signUp(event){
        event.preventDefault();
        let isNotUnique = props.users.some((user) => user.login == data.login);
        if(!isNotUnique){
            props.onSignUp(data);
        }
    }

    return <>
    <div className="">
        <div className="container ">
            <div className="row justify-content-between ">
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    <form onSubmit={signUp}>
                        <div className="form-outline mb-4">
                            <input type="text" id="form2Example1" value={data.login} className="form-control" onChange={handleLoginChange}/>
                            <label className="form-label" htmlFor="form2Example1">Login</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" value={data.password} className="form-control" onChange={handlePasswordChange}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                    </form> 
                </div>
                <div className="col-lg-6 col-lg-6  col-md-6 col-12">
                    {props.users.map((user) => {
                        return <>
                            <div>{user.login}</div>
                            <div>{user.password}</div>
                        </>
                    })}
                </div>
            </div>
        </div>
    </div>   
    </>

}
const mapStateToProps = state => {
    return {
        users: state.user.users
    }
};

const mapDispatchToProps = dispatch => ({
    onSignUp: (user) => dispatch ({
        type: SIGNUP, user
    })
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(SignUp);