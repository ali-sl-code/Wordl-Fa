import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState<{
    id: number
    name: string
    status: string
  }>({ id: 0, name: '', status: '' })

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [url])

  return [data]
}

export default useFetch
