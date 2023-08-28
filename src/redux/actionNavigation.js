export const lastPath = (path) => {
    return {
        type:"LAST_PATH",
        payload: path
    }
}

export const setLogin = (value,type) => {
    switch (type){
        case "EMAIL":{
            return {
                type: "SET_EMAIL",
                payload: value
            }
        }
        case "PASSWORD" :{
            return {
                type: "SET_PASSWORD",
                payload: value
            }
        }
    }
}