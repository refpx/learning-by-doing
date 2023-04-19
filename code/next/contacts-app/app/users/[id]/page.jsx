const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data
}

async function page({params}) {
  const {data} = await getUser(params.id)

  return (
    <div className="w-1/4 mx-auto border border-gray-900 rounded-sm mt-4 py-4 flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-3xl">User details</h1>
      <div className="flex flex-col justify-center items-center gap-2">
        <h5 className="font-bold">{data.id} {data.first_name} {data.last_name}</h5>
        <p>{data.email}</p>
        <img
          src={data.avatar}
          alt={data.email}
          className="w-20 h-20 rounded-full"
        />
      </div>
    </div>
  )
}
export default page