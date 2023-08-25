const requestData = () => {
    return {
        type: "REQUEST_DATA",
    }
}

export const fetchData = (url) => {
    return (dispatch) => {
        dispatch(requestData());
        return fetch(url)
        .then((response) =>{
            if (response.status === 404){
                dispatch({type:"ERROR", payload:"No results found for that search"})
                throw new Error("Recurso no encontrado")
            }
            dispatch({type:"ERROR", payload:""})
            return response.json()
        })
            .then((chars) => {return dispatch({type:"DEFAULT_CHAR", payload: chars})})
            .catch(error =>{
                console.error("Error en la solicitud", error)
            })
    }
}

export const setSearchTerm = (term) => {
    return {
        type: "SET_SEARCH_TERM",
        payload: term,
    }
}
export const onChangePage = (page) => {
    return {
        type : "ON_CHANGE_PAGE",
        payload: page
    }
}
export const setFavorite = (id,type) => {
    switch (type){
        case "PUT":
            return{
                type: "SET_FAVORITE",
                payload: id
            }
        case "QUIT":
            return {
                type: "QUIT_FAVORITE",
                payload: id
            }
    }
}