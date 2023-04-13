'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navbar() {
  const router = useRouter()

  return (
    <header>
      <Link href='/'>
        <h1>My App</h1>
      </Link>

      <div>
        <button onClick={() => router.push('/new')}>Add task</button>
      </div>
    </header>
  )
}
export default Navbar
