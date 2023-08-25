import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../cards/CharcaterCard';
import SkeletonCard from '../loadSkeleton/SkeletonCard';
import NoFavoriteMessage from './NoFavoriteMessage';
export default function MapFavorite() {
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);
  const favoriteChars = useSelector((state) => state.reducer.favoriteChars)
  const searchTerm = useSelector((state) => state.reducer.searchTerm)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true);
    const fetchFavoriteCharacters = async () => {
      try {
        const characters = await Promise.all(
            favoriteChars.map(async (charId) => {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${charId}`);
            const data = await response.json();
            return data;
          })
        );
        setFavoriteCharacters(characters);
      } catch (error) {
        console.error('Error fetching favorite characters:', error);
      }
      setLoad(false);
    };
    fetchFavoriteCharacters();
  }, [favoriteChars]);

  const filteredFavCharacteres = favoriteCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      {searchTerm && favoriteChars.length != 0 ?
        filteredFavCharacteres.map((character) => {
          return <CharacterCard
            favorite={true}
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            type={character.type}
            image={character.image}
            location={character.location.name}
            gender={character.gender} />
        })
        :
        favoriteChars.length > 0 ? load ? <SkeletonCard arraySkeleton={favoriteChars.length}/> :
          favoriteCharacters.map((character) => {
            return <CharacterCard
              favorite={true}
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              status={character.status}
              type={character.type}
              image={character.image}
              location={character.location.name}
              gender={character.gender} />
          }) : <NoFavoriteMessage/>}
    </>
  );
}
