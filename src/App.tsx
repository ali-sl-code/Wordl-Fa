import { useEffect } from 'react'

import Header from './components/Header'
import Tiles from './components/Tiles'
import useFetch from './hooks/useFetch'

import './fonts/IRANSansWeb_Bold.ttf'
import './index.css'
import './App.css'

function App() {
  const [word] = useFetch('http://localhost:3001/word')

  useEffect(() => {
    console.log(word)
  }, [word])

  return (
    <main className="w-full">
      <Header />
      <Tiles />
      <section className="Keybord"></section>
    </main>
  )
}

export default App
