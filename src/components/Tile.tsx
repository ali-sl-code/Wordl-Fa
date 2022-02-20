import { memo } from 'react'

function Tile(props: any) {
  return (
    <div
      className={`flex items-center justify-center font-IRANSansBold w-[50px] h-[50px] mx-[2.5px] border-2 ${
        props.children ? 'border-black' : ''
      }`}
    >
      {props.children && (
        <span className={`text-black text-3xl`}>{props.children}</span>
      )}
    </div>
  )
}

export default memo(Tile)
