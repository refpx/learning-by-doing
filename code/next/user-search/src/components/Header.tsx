import SunIcon from '@/components/icons/SunIcon'

function Header () {
  return (
    <header className='flex items-center space-x-2 mb-8'>
      <h1 className='text-white text-4xl font-bold flex-grow'>devFinder</h1>
      <span className='uppercase text-white'>Light</span>
      <button>
        <SunIcon className='text-white w-6 h-6' />
      </button>
    </header>
  )
}
export default Header
