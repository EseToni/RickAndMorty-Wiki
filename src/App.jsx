import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/login'
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
  )
}
