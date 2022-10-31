import { useEffect, useState, useRef, useCallback, FocusEvent } from 'react'

import Header from './components/Header'
import Tiles from './components/Tiles'
import useFetch from './hooks/useFetch'
import validation from './utils/validation'

import './fonts/IRANSansWeb_Bold.ttf'
import './index.css'
import './App.css'

function App() {
  const [word] = useFetch('http://localhost:3001/word')

  const [input, setInput] = useState<string>('')
  const [history, setHistory] = useState<
    { status: 'present' | 'correct' | 'absent'; char: string }[][]
  >([])
  const [gameStatus, setGameStatus] = useState<'IN_PROGRESS' | 'WIN' | 'LOOSE'>(
    'IN_PROGRESS',
  )

  const inputRef = useRef<HTMLInputElement | null>(null)

  const persion = new RegExp('^[آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی]+$')

  const checkCorrect = useCallback(
    arr => arr.every((v: 'present' | 'correct' | 'absent') => v == 'correct'),
    [],
  )

  const onChange = useCallback(
    (event: FocusEvent<HTMLInputElement, Element>): void => {
      const value = event.target.value
      if (gameStatus === 'IN_PROGRESS') {
        if (persion.test(input) || persion.test(value)) {
          if (value.length || input.length) {
            if (value?.length == 5) {
              setHistory(preHistory => {
                return [...preHistory, validation(value, word.name)]
              })
              setInput('')
            } else {
              setInput(value)
            }
          }
        }
      }
    },
    [input, gameStatus],
  )

  useEffect(() => {
    if (history.length !== 0 && history.length !== 6) {
      if (checkCorrect(history[history.length - 1])) {
        setGameStatus('WIN')
      }
    } else if (history.length === 6) {
      setGameStatus('LOOSE')
    }
  }, [history])

  const onBlurInput = (event: FocusEvent<HTMLInputElement, Element>): void => {
    event.currentTarget.focus()
  }

  return (
    <main className="w-full">
      <Header />
      <Tiles input={input} history={history} />
      <section className="Keybord">
        <input
          value={input}
          style={{ opacity: 0 }}
          ref={inputRef}
          autoFocus={true}
          onChange={onChange}
          onBlur={onBlurInput}
        />
      </section>
    </main>
  )
}

export default App
