/* globals describe, expect, test */
import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Test in useFetchGifs', () => {
  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('dota'))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('debe de retornar un arreglo de imagenes e isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('dota'))

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
