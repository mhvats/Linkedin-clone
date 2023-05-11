import React from 'react'
import './header.css'
import HeaderLeft from './headerLeft'
import HeaderRight from './headerRight'
import HeaderEnd from './headerEnd'
// Icons
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Logo from '../header/me.jpg'
import { Avatar } from '@mui/material';

function header() {
    return (
        <div className='header'>
            <div className='headerLeft-main'>
                <HeaderLeft />
            </div>
            <div className='headerRight-main'>
                <HeaderRight Icon={HomeIcon} title='Home' />
                <HeaderRight Icon={GroupIcon} title='My Network' />
                <HeaderRight Icon={WorkIcon} title='Job' />
                <HeaderRight Icon={MessageIcon} title='Message' />
                <HeaderRight Icon={NotificationsIcon} title='Notification' />
                <HeaderRight Icon={Avatar} title='Mehul raj' />
            </div>
            <div className='headerEnd-main'>
                <HeaderEnd />
            </div>

        </div>
    )
}

export default header
