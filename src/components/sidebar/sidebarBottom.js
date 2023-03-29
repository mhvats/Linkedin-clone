import React from 'react'
import './sidebarBottom.css'
function sidebarBottom() {
  return (
    <div className='sidebarBottom'>
      <div className='sidebarBottom-container'>
        <div className='sidebarBottom-links'>
          <p id='groups'>Groups</p>
          <p id='events'>Events</p>
          <p id='followed-hashtags'>Followed Hashtags</p>
        </div>
        <div className='sidebarBottom-container-add-button'>
          +
        </div>
      </div>
      <div className='sidebarBottom-down-container'>
        <p>Discover more</p>
      </div>
    </div>
  )
}

export default sidebarBottom
