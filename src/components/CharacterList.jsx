import { useEffect, useState } from 'react'
import Character from './Character'
import NavPage from './NavPage'

const CharacterList = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      )
      const { results } = await response.json()
      setLoading(false)
      setCharacters(results)
    }

    fetchData()
  }, [page])

  return (
    <div className='container'>
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className='row'>
          {characters.map(character => (
            <div className='col-md-4' key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}

      <NavPage page={page} setPage={setPage} />
    </div>
  )
}

export default CharacterList
