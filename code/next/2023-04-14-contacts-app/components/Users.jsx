/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from "next/navigation"

function Users({users}) {
  const router = useRouter()

  return (
    <ul className="grid grid-flow-row border border-gray-900 rounded-sm">
      {
        users.map(user => (
          <li
            key={user.id}
            onClick={() => {
              router.push(`/users/${user.id}`)
            }}
            className="flex items-center justify-between p-4 border-b border-gray-900 hover:bg-gray-700 hover:text-white cursor-pointer"
          >
            <div>
              <h5 className="font-bold">{user.id} {user.first_name} {user.last_name}</h5>
              <p>{user.email}</p>
            </div>
            <img 
              src={user.avatar} 
              alt={user.email} 
              className="w-20 h-20 rounded-full"
            />
          </li>
        ))
      }
    </ul>
  )
}
export default Users