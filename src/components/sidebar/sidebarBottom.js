import React from 'react'
import './sidebarBottom.css'
function sidebarBottom() {
  return (
    <div className='sidebarBottom'>
      <div className='sidebarBottom-container'>
        <div className='sidebarBottom-links'>
          <p id='groups' className='pointer'>Groups</p>
          <p id='events' className='pointer'>Events</p>
          <p id='followed-hashtags' className='pointer'>Followed Hashtags</p>
          <p className='pointer'>Discover more</p>
        </div>
      </div>
    </div>
  )
}

export default sidebarBottom

