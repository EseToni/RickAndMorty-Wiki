import { Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Layout from "../components/Layout/Layout";
import MapCard from "../components/cards/mapCard";
import MapFavorite from "../components/favorites/MapFavorite";
import CardDetail from "../components/cards/CardDetail";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { lastPath } from "../redux/actionNavigation";

export default function MainRoutes() {
  const location = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(lastPath(location.pathname))
  },[location.pathname])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/characters" element={<MapCard />} />
          <Route path="/favorites" element={<MapFavorite/>}/>
          <Route path="/characters/:id" element={<CardDetail/>}/>
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  )
}
