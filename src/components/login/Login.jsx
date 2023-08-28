import { useState } from "react"
import { setLogin } from "../../redux/actionNavigation"
import { validateLogin  } from "./loginUtils"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { LOGIN_EXAMPLES } from "../../constans/constans"
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {email , password} = useSelector((state) => state.secondReducer.loginState)
  const [errors, setErrors] = useState({ email: "Introduce un email", password: "Introduce una contraseña",});

  const handleChange = (event) => {
    const property = event.target.name; 
    const value = event.target.value;
    dispatch(setLogin(value,property.toUpperCase()))
}

const loginAcces = () =>{
  if((email === LOGIN_EXAMPLES.email) && (password === LOGIN_EXAMPLES.password)){
      dispatch({type:"SET_ACCESS_LOGIN"})
      navigate("/characters")
  }
  else{
    return alert("Email o contraseña invalida")
  }
}

const submitHandler = (event) => {
  event.preventDefault();
  loginAcces()
}
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-40 w-auto"
              src="../../../../../public/img/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-800">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6"  method="POST" onSubmit={submitHandler}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-zinc-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    onChange={handleChange}
                    value={email}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-zinc-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-lime-700 hover:text-green-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    value={password}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-zinc-600">
              Not a member?{' '}
            </p>
          </div>
        </div>
      </>
    )
  }
  