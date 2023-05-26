'use client'

import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const MyProfile = () => {
  const { data: session } = useSession()
  const [posts, setPosts] = useState([])

  const handleEdit = () => {}
  const handleDelete = async () => {}

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`)
      const data = await res.json()
      setPosts(data)
    }

    if (session?.user.id) fetchPosts()
  }, [])

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}
export default MyProfile
