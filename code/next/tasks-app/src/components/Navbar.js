'use client'

import { useTasks } from '@/context/TasksContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Navbar() {
  const router = useRouter()
  const { tasks } = useTasks()

  return (
    <header className='flex justify-between items-center bg-gray-800 px-28 py-3'>
      <Link href='/'>
        <h1 className='font-bold text-3xl text-white'>
          My App{' '}
          <span className='text-slate-300 text-sm ml-5'>
            {tasks.length} tasks
          </span>
        </h1>
      </Link>

      <div>
        <button
          onClick={() => router.push('/new')}
          className='bg-gray-700 text-white px-4 py-2 rounded-md font-bold'
        >
          Add task
        </button>
      </div>
    </header>
  )
}
export default Navbar
