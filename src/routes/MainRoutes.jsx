import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import NavBar from "../components/navBar";
import Prueba from "../components/Prueba";
import SimpleContainer from "../components/container";
import React from 'react'
import Layout from "../components/Layout/Layout";
import HorizontalScroll from "../components/miniComponents/HorizontalScroll";
export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Prueba" element={<Prueba />} />
          <Route path="/try" element={<HorizontalScroll/>}/>
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>


  )
}
