import React from 'react'
import './sidebar.css'
import SidebarTop from './sidebarTop'
import SidebarBottom from './sidebarBottom'
function sidebar() {
  return (
    <div className='sidebar-main'>
      <SidebarTop />
      <SidebarBottom />
    </div>
  )
}

export default sidebar
