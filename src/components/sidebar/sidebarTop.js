import React from 'react'
// import './sidebarTop.css'
import './sidebarTopinit.css'
import { Avatar } from '@mui/material'
// import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
// import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import CoverPic from '../image/cover.jpg'
function sidebarTop() {
  return (
    <div className='sidebarTop'>
      <div className='sidebarTop-cover'>
        <img src={CoverPic} alt='logo' className='sidebarTop-cover'></img>
        <Avatar className='sidebarTop-avatar' title='Login' />
      </div>
      <div className='sidebarTop-qualification'>
        <p>Student at Vaishali Institute of Business and Rural Management</p>
      </div>
      <div className='sidebarTop-connection-parent'>
        <div className='sidebarTop-connection'>
          <p style={{ color: 'grey' }}>Connection</p>
          <p style={{ color: 'blue' }}>20</p>
        </div>
        <div className='sidebarTop-connection-value'>
          <p style={{ color: 'grey' }}>Connect with alumni</p>
          <p style={{ color: 'blue' }}>1</p>
        </div>
        <div className='sidebarTop-viewCount' style={{display:'flex', justifyContent:'space-between', padding:'0px 10px'}}>
          <p id='viewCount-text' style={{color:'grey'}}>Who's viewed your profile</p>
          <p id='viewCount-value' style={{color:'blue'}}>7</p>
        </div>
      </div>
      {/* <div className='sidebarTop-insights-parent'>
        <div className='sidebarTop-insights'>
          <p id='insights-text'>Access exclusive tools & insights</p>
        </div>
        <div className='insights-premium'>
          <AddBoxRoundedIcon />
          <p id='insights-premium-text'>Try Premium for free</p>
        </div>
      </div>
      <div className='sidebarTop-whislist'>
        <BookmarkRoundedIcon />
        <p id='myItmes'>My Items</p>
      </div> */}
    </div>
  )
}

export default sidebarTop
