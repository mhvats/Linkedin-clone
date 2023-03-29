import React from 'react'
import './headerEnd.css'
import HeaderRight from './headerRight'
import AppsIcon from '@mui/icons-material/Apps';
function headerEnd() {
  return (
    <div className='headerEnd'>
      <HeaderRight Icon={AppsIcon} title="Tools" />
      <a className='headerEnd-text' href='/'>Try premium for free + {25}% off</a>
    </div>
  )
}

export default headerEnd
