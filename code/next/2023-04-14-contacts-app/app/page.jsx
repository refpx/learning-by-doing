const fetchUsers = async () => { 
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

async function Home() {
  const users = await fetchUsers()
  console.log(users)

  return (
    <div>
      <h1>Home page</h1>
      <hr />

      <div>
        {
          JSON.stringify(users)
        }
      </div>
    </div>
  )
}
export default Home