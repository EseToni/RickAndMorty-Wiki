import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions";
import CharacterCard from "./cards/CharcaterCard";
import MapCard from "./cards/mapCard";
import React from 'react'

export default function Prueba() {
    const dispatch = useDispatch()
  return (
    <>
    <MapCard></MapCard>
    </>
  )
}
