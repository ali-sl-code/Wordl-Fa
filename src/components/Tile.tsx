import { memo } from 'react'

interface IProps {
  status: 'present' | 'correct' | 'absent' | null
  children: JSX.Element | JSX.Element[] | string | null
}

function Tile({ status, children }: IProps) {
  return (
    <div
      className={`flex items-center justify-center font-IRANSansBold w-[50px] h-[50px] mx-[2.5px] border-2 ${
        status === 'correct'
          ? 'border-green-700 bg-green-700'
          : status === 'absent'
          ? 'border-gray-700 bg-gray-700'
          : status === 'present'
          ? 'border-yellow-700 bg-yellow-700'
          : children
          ? 'border-black'
          : ''
      }`}
    >
      {children && <span className={`text-black text-3xl ${status ? 'text-white' : ''}`}>{children}</span>}
    </div>
  )
}

export default memo(Tile)
