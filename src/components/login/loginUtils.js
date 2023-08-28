import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../redux/actionNavigation";
import { LOGIN_EXAMPLES } from "../../constans/constans";
import { useNavigate } from "react-router-dom";

export const validateLogin= (inputs) => {
    var errors = {}
    var passw=  /^[A-Za-z]\w{7,14}$/;
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!inputs.email){
        errors.email = "Introduce un email"
    }
    else if(!regexEmail.test(inputs.email)){
        errors.email = "Email Invalido"
    }
    if(!inputs.password){
        errors.password = "Introduce una contraseña"
    }
    else if(!passw.test(inputs.password)){
        errors.password = "Contraseña invalida"
    }
    return errors
}
//---

