import { useState } from 'react'
import PropTypes from 'prop-types'

export function AddCategory ({ handleAddCategory }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length <= 1) return

    handleAddCategory(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit} aria-label='form'>
      <input
        type='text'
        placeholder='Dota 2, Valorant...'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired
}
