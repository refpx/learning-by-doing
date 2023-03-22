import { useRef } from 'react'

export default function FocusScreen () {
  const inputRef = useRef()

  const handleClick = () => {
    console.log(inputRef.current)
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Fredy...'
      />

      <button className='btn btn-primary' onClick={handleClick}>Set focus</button>
    </>
  )
}
