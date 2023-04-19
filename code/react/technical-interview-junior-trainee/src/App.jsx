import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_FACTS = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE = 'https://cataas.com/'

export default function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACTS)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeWords}?json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Cat Facts</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={`${CAT_PREFIX_IMAGE}${imageURL}`} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
