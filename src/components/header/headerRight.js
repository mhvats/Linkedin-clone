import { Avatar } from '@mui/material'
import React from 'react'
import './headerRight.css'
function headerRight({avatar, Icon, title}) {
  return (
   <div className='headerRight'>
    {Icon && <Icon className='headerRight-icon' />}
    {avatar && <Avatar className='headerRight-icon' src={Avatar}/>}
    <h3>{title}</h3>
    </div>
  )
}

export default headerRight
