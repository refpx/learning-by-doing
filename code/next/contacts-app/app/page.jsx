import Users from "@/components/Users"

const fetchUsers = async () => { 
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

async function Home() {
  const users = await fetchUsers()

  return (
    <main className="w-9/12 mx-auto py-4">
      <Users users={users} />
    </main>
  )
}
export default Home