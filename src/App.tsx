import { useCallback, useEffect, useMemo } from 'react'

import Header from './components/Header'
import useFetch from './hooks/useFetch'

import './index.css'

function App() {
  const [word] = useFetch('http://localhost:3001/word')

  useEffect(() => {
    console.log(word)
  }, [word])

  return (
    <main className="w-full">
      <Header />
      <section className="Tiles"></section>
      <section className="Keybord"></section>
    </main>
  )
}

export default App
