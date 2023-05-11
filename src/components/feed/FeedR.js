import React, { useState } from 'react'
import { Avatar } from '@mui/material'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EventIcon from '@mui/icons-material/Event';
import NotesIcon from '@mui/icons-material/Notes';
import HeaderRight from '../header/headerRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SendIcon from '@mui/icons-material/Send';
import './FeedR.css'
function FeedR() {
    const [inputPost, setPostInput] = useState('');
    const [postArray, setPostArray] = useState([]);
    function handlePostInput(e) {
        setPostInput(e.target.value);
    }
    function handlePostButtonClick(e) {
        setPostArray((prevState) => {
            return [inputPost, ...prevState];
        })
        setPostInput('');
    }
    function hanldeKeypress(e) {
        if (e.key === "Enter") {
            if (!inputPost) {
                return
            }
            else {

                setPostArray((prevState) => {
                    return [inputPost, ...prevState];
                })
                setPostInput('');
            }

        }
    }
    return (
        <div className='feed'>
            <div className='feed-post'>
                <div className='feed-post-top' >
                    <Avatar className='feed-post-top-avatar' title='User' />
                    <input
                        onChange={handlePostInput}
                        value={inputPost}
                        onKeyDown={hanldeKeypress}
                        placeholder='Start a Post'
                    />
                    {inputPost && <div onClick={handlePostButtonClick} onKeyDown={hanldeKeypress} className='feed-post-top-button'>Post</div>}
                </div>
                <div className='feed-post-bottom'>
                    <HeaderRight Icon={InsertPhotoIcon} title='Photo' />
                    <HeaderRight Icon={VideoCameraBackIcon} title='Video' />
                    <HeaderRight Icon={EventIcon} title='Event' />
                    <HeaderRight Icon={NotesIcon} title='Write Note' />
                </div>
            </div>
            <hr className='feed-horizontal' />
            <div>{
                postArray.map((item, index) => {
                    return (
                        <div className='post' key={index}>
                            <div className='post-top'>
                                <Avatar />
                                <p>Mehul raj</p>
                            </div>
                            <div className='post-middle'>
                                <p>{item}</p>
                            </div>
                            <div className='post-bottom'>
                                <FavoriteBorderIcon />
                                <ModeCommentIcon />
                                <AutorenewIcon />
                                <SendIcon />
                            </div>
                        </div>
                    )
                })
            }</div>
        </div>
    )
}

export default FeedR;
