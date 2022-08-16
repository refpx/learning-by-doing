import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-zinc-500 flex justify-between px-10 py-2'>
      <Link to='/' className='text-white font-bold'>
        <h1>React MySQL</h1>
      </Link>
      <ul className='flex'>
        <li>
          <Link className='px-2' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='px-2' to='/new'>
            Create task
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
