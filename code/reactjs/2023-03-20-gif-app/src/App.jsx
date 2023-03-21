import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

function App () {
  const [categories, setCategories] = useState(['valorant'])

  const handleAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  )
}

export default App