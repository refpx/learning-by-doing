import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'

export function SearchPage () {
  const navigate = useNavigate()
  const location = useLocation()

  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className='row'>
        <div className='col-5'>
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Spiderman...'
              className='form-control'
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary'>
              Search
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          <div className='alert alert-info'>
            Search a hero
          </div>

          <div className='alert alert-danger'>
            No hero with <b>ABC</b>
          </div>

          {/* <HeroCard {...hero} /> */}
        </div>
      </div>
    </>
  )
}
