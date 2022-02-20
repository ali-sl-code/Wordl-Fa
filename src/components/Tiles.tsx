import { memo } from 'react'
import Tile from './Tile'

function Tiles(props: any) {
  return (
    <section
      className={`dir flex flex-col items-center justify-center px-[10px] my-5`}
      style={{ direction: 'rtl' }}
    >
      <div className={`my-1 flex items-center`}>
        <Tile>ا</Tile>
        <Tile>ی</Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
      <div className={`my-1 flex items-center`}>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
      <div className={`my-1 flex items-center`}>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
      <div className={`my-1 flex items-center`}>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
      <div className={`my-1 flex items-center`}>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
      </div>
    </section>
  )
}

export default memo(Tiles)
