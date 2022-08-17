import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const reveiveMessage = message => {
      setMessages([message, ...messages])
    }

    socket.on('message', reveiveMessage)

    return () => {
      socket.off('message', reveiveMessage)
    }
  }, [messages])

  const handleSubmit = e => {
    e.preventDefault()
    socket.emit('message', message)
    const newMessage = {
      body: message,
      from: 'Me',
    }
    setMessages([newMessage, ...messages])
    setMessage('')
  }

  return (
    <div className='h-screen bg-zinc-800 text-white flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='bg-zinc-900 p-10'>
        <h1 className='text-2xl font-bold my-2 text-center'>
          Chat: React - SocketIo
        </h1>
        <input
          type='text'
          onChange={e => setMessage(e.target.value)}
          value={message}
          className='border-2 border-zinc-500 rounded-md p-2 text-black w-full'
        />
        {/* <button type='submit' className='bg-blue-500'>
          Send
        </button> */}
        <ul className='h-80 overflow-y-auto'>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`table text-sm rounded-md p-2 my-2 ${
                message.from === 'Me' ? 'bg-sky-700 ml-auto' : 'bg-black'
              }`}>
              <p>{`${
                message.from !== 'Me' ? message.from.slice(0, 3) : message.from
              }: ${message.body}`}</p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App
