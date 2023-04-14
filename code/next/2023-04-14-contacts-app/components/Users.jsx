function Users({users}) {
  return (
    <ul>
        {
          users.map(user => (
            <li key={user.id}>
              <div>
                <h5>{user.id} {user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
              </div>
              <img src={user.avatar} alt={user.email} />
            </li>
          ))
        }
      </ul>
  )
}
export default Users