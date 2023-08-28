const navigationState = {
    lastPathsLocation:"",
    loginState:{
        email:"",
        password:"",
    },
    accessState: false,
}

const reducerNavigation = (state = navigationState, {type , payload}) => {
    switch (type) {
        case "LAST_PATH":{
            return{
                ...state,
                lastPathsLocation: [...state.lastPathsLocation, payload]
            }
        }
        case "SET_EMAIL" :{
            return {
                ...state,
                loginState:{...state.loginState, email:payload}
            }  
        }
        case "SET_PASSWORD" :{
            return {
                ...state,
                loginState:{...state.loginState, password:payload}
            }
        }
        case "SET_ACCESS_LOGIN" : {
            return {
                ...state,
                accessState: !state.accessState
            }
        }
        default:
            return state
    }
}

export default reducerNavigation