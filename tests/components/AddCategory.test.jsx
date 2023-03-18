/* globals describe, expect, test, jest */
import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Test en <AddCategory />', () => {
  test('debe de cambiar el valor en la caja de texto', () => {
    render(<AddCategory handleAddCategory={() => { }} />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'dota' } })

    expect(input.value).toBe('dota')
    // screen.debug()
  })

  test('debe de llamar handleSubmit si el input tiene un valor', () => {
    const inputValue = 'dota'
    const handleAddCategory = jest.fn()
    render(<AddCategory handleAddCategory={handleAddCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })
    fireEvent.submit(form)
    // screen.debug()
    expect(input.value).toBe('')

    expect(handleAddCategory).toHaveBeenCalled()
    expect(handleAddCategory).toHaveBeenCalledTimes(1)
    expect(handleAddCategory).toHaveBeenCalledWith(inputValue)
  })

  test('no debe de llamar el handleAddCategory si el input está vacio', () => {
    const handleAddCategory = jest.fn()
    render(<AddCategory handleAddCategory={handleAddCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)

    expect(handleAddCategory).not.toHaveBeenCalled()
  })
})
