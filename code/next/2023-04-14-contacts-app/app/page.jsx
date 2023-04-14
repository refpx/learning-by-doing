import Users from "@/components/Users"

const fetchUsers = async () => { 
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

async function Home() {
  const users = await fetchUsers()

  return (
    <div>
      <h1>Home page</h1>
      <Users users={users} />
    </div>
  )
}
export default Home