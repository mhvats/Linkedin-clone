import React from 'react'
import './sidebarTop.css'
import { Avatar } from '@mui/material'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
function sidebarTop() {
  return (
    <div className='sidebarTop'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkgr0yoELFffZVISIdjHfsMmO5_5zyk5s4A&usqp=CAU' alt='logo' className='sidebarTop-cover'></img>
      <Avatar className='sidebarTop-avatar' title='Login' />
      <div className='sidebarTop-qualification'>
        <p>Student at Vaishali Institute of Business and Rural Management</p>
      </div>
      <div className='sidebarTop-connection-parent'>
        <div className='sidebarTop-connection'>
          <p id='connection-greyText'>Connection</p>
          <p id='connection-blackText'>Connect with alumni</p>
        </div>
        <div className='sidebarTop-connection-value'>
          <p>20</p>
        </div>
      </div>
      <div className='sidebarTop-viewCount'>
        <p id='viewCount-text'>Who's viewed your profile</p>
        <p id='viewCount-value'>7</p>
      </div>
      <div className='sidebarTop-insights-parent'>
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
      </div>
    </div>
  )
}

export default sidebarTop
