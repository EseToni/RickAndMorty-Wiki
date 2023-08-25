const navigationState = {
    lastPathsLocation:""
}

const reducerNavigation = (state = navigationState, {type , payload}) => {
    switch (type) {
        case "LAST_PATH":{
            return{
                ...state,
                lastPathsLocation: [...state.lastPathsLocation, payload]
            }
        }
        default:
            return state
    }
}

export default reducerNavigation