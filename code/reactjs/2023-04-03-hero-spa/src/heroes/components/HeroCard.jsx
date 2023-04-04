import { Link } from 'react-router-dom'

const CharacterByHero = ({ alterEgo, characters }) => {
  if (alterEgo === characters) <></>

  return <p className='card-text'>{characters}</p>
}

export function HeroCard ({ id, superhero, alter_ego: alterEgo, first_appearance: firstAppearance, characters }) {
  const heroImageUrl = `/assets/heroes/${id}.jpg`

  // const characterByHero = (<p className='card-text'>{characters}</p>)

  return (
    <div className='col scale-up-center'>
      <div className='card'>
        <div className='row no-gutters'>
          <div className='col-4'>
            <img src={heroImageUrl} alt={superhero} className='card-img' />
          </div>
          <div className='col-8'>
            <div className='card-body'>
              <h5 className='card-title'>{superhero}</h5>
              <p className='card-text'>{alterEgo}</p>
              {
                (alterEgo !== characters) && <CharacterByHero characters={characters} alterEgo={alterEgo} />
              }
              <p className='card-text'>
                <small className='text-muted'>{firstAppearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                Más información...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
