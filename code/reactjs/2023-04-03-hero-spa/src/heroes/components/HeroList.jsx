import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './'

export function HeroList ({ publisher }) {
  const heroes = getHeroesByPublisher(publisher)

  console.log(heroes)

  return (
    <ul className='row row-cols-2 row-cols-md-4 g-2'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </ul>
  )
}
