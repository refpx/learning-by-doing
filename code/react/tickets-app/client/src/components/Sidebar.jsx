import { Link } from 'react-router-dom'

import { Icon, Divider } from '@tremor/react'
import { UserIcon, CollectionIcon, DocumentAddIcon } from '@heroicons/react/outline'

function Sidebar () {
  return (
    <aside className='fixed top-0 left-0 z-40 w-60 h-screen'>
      <div className='h-full px-3 py-4 overflow-y-auto bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <h1 className='text-white font-bold text-xl text-center'>Tickets app</h1>
            <Divider className='my-4' />
          </li>
          <li>
            <Link to='/login' className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700'>
              <Icon icon={UserIcon} color='white' className='p-0' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Login</span>
            </Link>
          </li>
          <li>
            <Link to='/queue' className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700'>
              <Icon icon={CollectionIcon} color='white' className='p-0' />
              <span className='flex-1 ml-3 whitespace-nowrap'>Queue</span>
            </Link>
          </li>
          <li>
            <Link to='/new-ticket' className='flex items-center p-2 rounded-lg text-white hover:bg-gray-700'>
              <Icon icon={DocumentAddIcon} color='white' className='p-0' />
              <span className='flex-1 ml-3 whitespace-nowrap'>New ticket</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
export default Sidebar
