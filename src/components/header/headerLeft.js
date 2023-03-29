import React from 'react'
import './headerLeft.css'
import SearchIcon from '@mui/icons-material/Search';


function headerLeft() {
  return (
    <div className='headerLeft'>
      <img className='headerLeft-logo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='Linkedin' />
      <div className='headerLeft-search'>
        <SearchIcon />
        <input className='headerLeft-search-input' placeholder='Search'></input>
      </div>
    </div>
  )
}

export default headerLeft
