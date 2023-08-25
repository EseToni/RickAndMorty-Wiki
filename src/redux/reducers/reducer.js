const initialState = {
    isLoading: false,
    error: "",
    defaultChar: [],
    allChars: [],
    favoriteChars: [],
    searchTerm: "",
    pages: "",
    urlNext: "",
    urlPrev: "",
    urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=&species=&status=&gender=`,
    statusString: "",
    genderString: "",
    specieString: "",
}


const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REQUEST_DATA":
            return {
                ...state,
                isLoading: true
            }
        case "ERROR":
            return {
                ...state,
                error: payload,
            }
        case "DEFAULT_CHAR":
            return {
                ...state,
                isLoading: false,
                pages: payload.info.pages,
                urlNext: payload.info.next,
                urlPrev: payload.info.prev,
                defaultChar: payload.results
            }
        case "SET_SEARCH_TERM":
            return {
                ...state,
                urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=${payload}&species=${state.specieString}&status=${state.statusString}&gender=${state.genderString}`,
                searchTerm: payload
            }
        case "ON_CHANGE_PAGE":
            return {
                ...state,
                urlPages: `https://rickandmortyapi.com/api/character/?page=${payload}&name=${state.searchTerm}&species=${state.specieString}&status=${state.statusString}&gender=${state.genderString}`
            }
        case "SET_FAVORITE":
            return {
                ...state,
                favoriteChars: [...state.favoriteChars, payload]
            }
        case "QUIT_FAVORITE":
            return {
                ...state,
                favoriteChars: [...state.favoriteChars.filter((num) => num !== payload)]
            }
        case "FILTER_STATUS":
            return {
                ...state,
                statusString: payload,
                urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=${state.searchTerm}&species=${state.specieString}&status=${payload}&gender=${state.genderString}`
            }
        case "FILTER_GENDER":
            return {
                ...state,
                genderString: payload,
                urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=${state.searchTerm}&species=${state.specieString}&status=${state.statusString}&gender=${payload}`
            }
        case "FILTER_SPECIE":
            return {
                ...state,
                specieString: payload,
                urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=${state.searchTerm}&species=${payload}&status=${state.statusString}&gender=${state.genderString}`
            }
        case "FILTER_CLEAR":
            return {
                ...state,
                statusString: "",
                genderString: "",
                specieString: "",
                urlPages: `https://rickandmortyapi.com/api/character/?page=${1}&name=${state.searchTerm}&species=&status=&gender=`
            }
        default:
            return state
    }
}

export default rootReducer