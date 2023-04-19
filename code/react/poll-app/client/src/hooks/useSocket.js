import { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'

export const useSocket = (serverPath) => {
  const socket = useMemo(() => io.connect(serverPath, {
    transports: ['websocket']
  }), [serverPath])

  const [status, setStatus] = useState(false)

  useEffect(() => {
    setStatus(socket.connected)
  }, [socket])

  useEffect(() => {
    socket.on('connect', () => {
      setStatus(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      setStatus(false)
    })
  }, [socket])

  return {
    status,
    socket
  }
}
