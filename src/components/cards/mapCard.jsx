import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../../redux/actions'
import CharacterCard from './CharcaterCard'
export default function MapCard() {
    const dispatch = useDispatch()
    const {isLoading, defaultChar , searchTerm} = useSelector((state) => state)

    useEffect(() => {
        dispatch(fetchData("https://rickandmortyapi.com/api/character","DEFAULT"))
    },[]);

    const filteredCharacters = defaultChar.filter((character)=>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
    {isLoading? <h1>LOADING</h1> : filteredCharacters.map((character) => {
        return <CharacterCard key={character.id} name={character.name} species={character.species} status={character.status} type={character.type} image={character.image} location={character.location.name} gender={character.gender}/>
    })}
    </>
  )
}
