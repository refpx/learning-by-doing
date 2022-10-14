const NavPage = ({ page, setPage }) => {
  return (
    <header className='d-flex justify-content-between align-items-center'>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <p>Page: {page}</p>
      <button
        className='btn btn-primary btn-sm'
        onClick={() => setPage(page + 1)}>
        Next
      </button>
    </header>
  )
}

export default NavPage
