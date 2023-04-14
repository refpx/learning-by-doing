import Link from "next/link"

function Navbar() {
  return (
    <div className="bg-gray-900 text-white">
      <nav className=" flex flex-wrap items-center justify-between mx-auto w-9/12 py-4">
      <h1 className="text-2xl font-bold">
        <Link href="/">Contacts App</Link>
      </h1>
      <ul className="flex flex-row gap-4">
        <li className="hover:underline">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link href="/services">Services</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
export default Navbar