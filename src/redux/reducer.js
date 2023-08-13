const initialState = {
    isLoading: false,
    defaultChar:[],
    searchTerm: "",
}


const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REQUEST_DATA":
            return {
                ...state,
                isLoading : true
            }
        case "DEFAULT_CHAR":
            return {
                ...state,
                isLoading : false,
                defaultChar : payload.results
            }
        case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm: payload
            }
        default:
            return state
    }
}

export default rootReducer