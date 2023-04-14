const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data
}

async function page({params}) {
  const {data} = await getUser(params.id)

  return (
    <div>
      <h1>User {data.id} details</h1>
      <div>
        <h5>{data.id} {data.first_name} {data.last_name}</h5>
        <p>{data.email}</p>
        <img src={data.avatar} alt={data.email} />
      </div>
    </div>
  )
}
export default page