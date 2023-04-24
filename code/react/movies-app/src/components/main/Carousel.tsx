import { useEffect, useState } from 'react'
import { Container } from '../styled.components'

interface Movie {
  name: string
  description: string
  thumbnail: string
}

interface Item {
  name: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

const Carousel = () => {
  const [data, setData] = useState<Movie[]>([])

  const getData = async (): Promise<void> => {
    const url = import.meta.env.VITE_BASE_URL
    const res = await fetch(url)
    const { data } = await res.json()
    const formattedData = data.results.map((item: Item) => {
      const obj: Movie = {
        name: item.name,
        description: item.description,
        thumbnail: `${item.thumbnail.path}.${item.thumbnail.extension}`,
      }
      return obj
    })
    setData(formattedData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {data.length > 0 && (
        <Container height={50} src={data[0].thumbnail}>
          Carousel
        </Container>
      )}
    </>
  )
}
export default Carousel
