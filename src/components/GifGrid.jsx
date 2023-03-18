import PropTypes from 'prop-types'
import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export function GifGrid ({ category }) {
  const { images, isLoading } = useFetchGifs(category)

  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {
          images.map((image) =>
            (
              <GifItem
                key={image.id}
                {...image}
              />
            )
          )
        }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
