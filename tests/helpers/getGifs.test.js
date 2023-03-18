/* globals describe, expect, test */
import { getGifs } from '../../src/helpers/getGifs'

describe('Test en getGifs()', () => {
  test('debe de retornar un arreglo de gifs', async () => {
    const gifs = await getGifs('dota')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
  })
})
