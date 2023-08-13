const requestData = () => {
    return {
        type: "REQUEST_DATA",
    }
}
const receiveData = (data, type) => {
    switch (type) {
        case "DEFAULT":
            return {
                type: "DEFAULT_CHAR",
                payload: data
            }
        case "FAV":
            return {
                type: "ADD_FAV",
                payload: data
            }
        default:
            break;
    }
}

export const fetchData = (url, type) => {
    return (dispatch) => {
        dispatch(requestData());
        return fetch(url)
            .then((response) => response.json())
            .then((chars) => dispatch(receiveData(chars, type)))
    }
}

export const setSearchTerm = (term) => {
    return {
        type: "SET_SEARCH_TERM",
        payload: term,
    }
}