import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/login'
import NavBar from './components/navBar'
export default function App() {
  // const count = useSelector(state => state.count)
  // const dispatch = useDispatch()
  // <div>
  //     {count}
  //     <button onClick={() => dispatch({type: "INCREMENT"})}> subir</button></div>

  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  )
}
