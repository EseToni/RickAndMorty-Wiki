import { Route, Routes } from "react-router-dom";
import Login from "../components/login/Login";
import Layout from "../components/Layout/Layout";
import MapCard from "../components/cards/mapCard";
import MapFavorite from "../components/favorites/MapFavorite";
import CardDetail from "../components/cards/CardDetail";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { lastPath } from "../redux/actionNavigation";

export default function MainRoutes() {
  const location = useLocation()
  const dispatch = useDispatch()
  const accessState = useSelector((state) => state.secondReducer.accessState)
  useEffect(() => {
    dispatch(lastPath(location.pathname)) 
  }, [location.pathname])

  return (
    <>
      <Routes>
        {accessState ? //si el usuario tiene acceso
          <Route path="/" element={<Layout />}>
            <Route path="/characters" element={<MapCard />} />
            <Route path="/favorites" element={<MapFavorite />} />
            <Route path="/characters/:id" element={<CardDetail />} />
          </Route>
          : //si no tiene acceso 
          <Route index path="/Login" element={<Login />} />}
      </Routes>
    </>
  )
}
