
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchData} from '../../redux/actions'
import CharacterCard from './CharcaterCard'
import SkeletonCard from '../loadSkeleton/SkeletonCard'

export default function MapCard() {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.reducer.isLoading)
  const defaultChar = useSelector((state) => state.reducer.defaultChar)
  const urlPages = useSelector((state) => state.reducer.urlPages)
  const error = useSelector((state) => state.reducer.error)
  const arrayLoad = new Array(20);

  useEffect(() => {
    dispatch(fetchData(urlPages))
  }, [urlPages]);
  
  return (
    <>
      {
        error.length > 0 ? <h1>{error}</h1> :
        isLoading ?
          <SkeletonCard arraySkeleton={arrayLoad.length} key={arrayLoad}/>  : 
          defaultChar.map((character) => {
            return <CharacterCard
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
      }
    </>
  )
}
