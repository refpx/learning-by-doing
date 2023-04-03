import { getHeroesByPublisher } from '../helpers'

export function HeroList ({ publisher }) {
  const heroes = getHeroesByPublisher(publisher)

  console.log(heroes)

  return (
    <ul>
      {
        heroes.map(hero => (
          <li key={hero.id}>
            {hero.superhero}
          </li>
        ))
      }
    </ul>
  )
}
