'use client'

import { useState } from 'react'

function Page() {
  const [task, setTask] = useState()

  return (
    <form>
      <input placeholder='Some title' />
      <textarea placeholder='Some awesome description...' />
      <button>Save</button>
    </form>
  )
}
export default Page
