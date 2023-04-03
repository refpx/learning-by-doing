import { renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Test useForm Hook', () => { 
  const initialForm = {
    name: 'Fredy',
    email: 'mail@mail.com'
  }

  test('debe de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm))
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      handleInputChange: expect.any(Function),
      handleResetForm: expect.any(Function)
    })
  })
})