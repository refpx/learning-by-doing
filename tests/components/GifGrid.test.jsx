import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test en <GifGrid />', () => {
  const category = 'dota'

  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    // screen.debug()

    const loading = screen.getByText('Loading...')
    expect(loading)
  })

  test('debe de mostrar items cuando se cargan imágenes de useFetchGifs', () => {

    const gifs = [{
      id: 'ABC',
      title: 'Fall guys',
      url: 'https://localhost/cualquier/fallguys.jpg',
    },
    {
      id: '123',
      title: 'Dota 2',
      url: 'https://localhost/cualquier/dota2.jpg',
    }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    // screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2)
  })
})