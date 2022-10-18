import { useState } from 'react'

const HelloWorld = () => {
  const [text, setText] = useState('Hello World')

  return (
    <div>
      <h2>{text}</h2>
      <button onClick={() => setText('Texto actualizado')}>Click me</button>
    </div>
  )
}

export default HelloWorld
