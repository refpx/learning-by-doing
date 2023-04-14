import Link from "next/link"

function Navbar() {
  return (
    <div>
      <h1>Contacts App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar