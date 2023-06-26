'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const SigninButton = () => {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className='flex gap-4 ml-auto'>
        <p className='text-sky-600 hover:text-sky-800'>{session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  return (
    <button
      onClick={() => signIn()}
      className='text-green-600 ml-auto hover:text-green-800'
    >
      Sign In
    </button>
  )
}
export default SigninButton
