/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'

export const useLocalStorage = (key, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    const items = localStorage.getItem(key)
    if (items) setData(JSON.parse(items))
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}
