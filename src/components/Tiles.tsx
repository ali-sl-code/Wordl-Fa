import { memo } from 'react'
import Tile from './Tile'

interface IProps {
  input: string
  history: { status: 'present' | 'correct' | 'absent'; char: string }[][]
}

function Tiles({ input, history }: IProps) {
  return (
    <section
      className={`dir flex flex-col items-center justify-center px-[10px] my-5`}
      style={{ direction: 'rtl' }}
    >
      {history.length !== 0 &&
        Array.from({ length: history.length }).map((_, index) => (
          <div className={`my-1 flex items-center`} key={index}>
            {history[index]?.map((value, i) => (
              <Tile status={value.status} key={i}>
                {value.char}
              </Tile>
            ))}
          </div>
        ))}

      {history.length !== 6 && (
        <div className={`my-1 flex items-center`}>
          {Array.from({ length: 5 }).map((_, index) => {
            if (input[index]) {
              return (
                <Tile status={null} key={index}>
                  {input[index]}
                </Tile>
              )
            } else {
              return <Tile status={null} children={null} key={index} />
            }
          })}
        </div>
      )}

      {history.length <= 4 &&
        Array.from({ length: 5 - history.length }).map((_, index) => (
          <div className={`my-1 flex items-center`} key={index}>
            <Tile status={null} children={null} />
            <Tile status={null} children={null} />
            <Tile status={null} children={null} />
            <Tile status={null} children={null} />
            <Tile status={null} children={null} />
          </div>
        ))}
    </section>
  )
}

export default memo(Tiles)
