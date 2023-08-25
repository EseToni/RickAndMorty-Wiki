export const filterStatus = (status) => {
    return {
        type: "FILTER_STATUS",
        payload: status
    }
}

export const filterGender = (gender) =>{
    return{
        type: "FILTER_GENDER",
        payload: gender
    }
}

export const filterSpecie = (specie) =>{
    return{
        type:"FILTER_SPECIE",
        payload:specie
    }
}
export const filterClear = () => {
    return {
        type:"FILTER_CLEAR",
    }
}