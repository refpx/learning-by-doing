import { Link } from 'react-router-dom'
import { supabase } from '../supabase/client'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          Supabase react
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='#!'
                onClick={async () => await supabase.auth.signOut()}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
