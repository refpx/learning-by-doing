import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import User from './components/User'

export default async function Home () {
  const session = await getServerSession(authOptions)

  return (
    <section>
      <h1>Home</h1>
      <h2>Server Side Rendered</h2>
      <pre>{JSON.stringify(session)}</pre>
      <hr />
      <h2>Client Side Rendered</h2>
      <User />
    </section>
  )
}
