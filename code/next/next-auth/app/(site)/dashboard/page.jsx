'use client'

import { useSession, signOut } from 'next-auth/react'

export default function Dashboard () {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Hi {session?.user?.email ?? 'there'}!</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
