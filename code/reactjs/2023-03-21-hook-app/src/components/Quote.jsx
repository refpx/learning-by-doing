import { useState, useRef, useLayoutEffect } from 'react'

export function Quote ({ quote, author }) {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect()
    setBoxSize({ height, width })
  }, [quote])

  return (
    <>
      <blockquote className='blockquote text-end'>
        <p ref={pRef} className='mb-1'>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
