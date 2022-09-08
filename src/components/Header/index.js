import { memo } from 'react'
import './style.css'
const Header = ({ children }) => {
  return (
    <header className='header'>
      {children}
    </header>
  )
}

export default memo(Header) 