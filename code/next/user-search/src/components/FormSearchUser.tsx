import SearchIcon from '@/components/icons/SearchIcon'

function FormSearchUser () {
  return (
    <form className='flex flex-wrap items-center gap-2 bg-slate-800 p-2 rounded-lg mb-6'>
      <span>
        <SearchIcon className='text-blue-600 w-6 h-6' />
      </span>
      <input
        type='text'
        placeholder='Search Github username...'
        className='h-14 flex-1 p-2 rounded-md bg-transparent text-white placeholder:text-gray-400 focus:outline-none'
      />
      <button className='bg-blue-600 rounded-md text-white py-4 px-6 font-bold'>Search</button>
    </form>
  )
}
export default FormSearchUser
