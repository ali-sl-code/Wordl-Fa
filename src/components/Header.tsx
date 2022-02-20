import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBarsProgress,
  faGear,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons'
import { memo } from 'react'

function Header() {
  return (
    <header className="w-full flex items-center justify-around py-3 pb-5 border-b-[1px]">
      <div className='pt-2'>
        <button className="mx-1">
          <FontAwesomeIcon icon={faBars} fontSize={'20px'} />
        </button>
        <button className="mx-1">
          <FontAwesomeIcon icon={faQuestion} fontSize={'20px'} />
        </button>
      </div>
      <div>
        <h1 className="font-bold text-2xl leading-none font-Shizuru">
          {'Wordle'.toUpperCase() + '-fa'}
        </h1>
      </div>
      <div className='pt-2'>
        <button className="mx-1">
          <FontAwesomeIcon icon={faBarsProgress} fontSize={'20px'} />
        </button>
        <button className="mx-1">
          <FontAwesomeIcon icon={faGear} fontSize={'20px'} />
        </button>
      </div>
    </header>
  )
}

export default memo(Header)
