import Link from 'next/link'
import SigninButton from './SigninButton'

const Navbar = () => {
  return (
    <header className='flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow'>
      <SigninButton />
      <Link
        href='/users'
      >
        Users List
      </Link>
    </header>
  )
}
export default Navbar
