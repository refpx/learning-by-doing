import io from 'socket.io-client'

const socket = io("/")

const App = () => {
  return (
    <div>Hello world</div>
  )
}
export default App