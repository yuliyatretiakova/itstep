const reducer = (state = {}, action) => {

    switch(action.type){
        case "INIT_USERS":
            return {...state,
                users: action.users,
                lastUserId: action.lastUserId,
                currentUser: action.currentUser
            }
        case "SIGNUP":
            let newId = ++state.lastUserId;
            let newUser  = {
                id: newId,
                login: action.user.login,
                password: action.user.password,
            };
            return {...state, 
                    users: [...state.users, newUser], 
                    lastUserId: newId
                    }; 
        case "SIGNIN":
            return {
                ...state,
                currentUser: action.login
            }
    }
    return state;
}
module.exports = reducer;