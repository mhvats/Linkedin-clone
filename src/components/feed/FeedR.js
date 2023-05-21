import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EventIcon from "@mui/icons-material/Event";
import NotesIcon from "@mui/icons-material/Notes";
import HeaderRight from "../header/headerRight";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AutorenewIcon from "@mui/icons-material/Autorenew";
// import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Feed.css";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
function FeedR() {
  const [inputPost, setInputPost] = useState("");
  const [postArray, setPostArray] = useState([]);
  const postRef = collection(db, "posts");
  const postList = async () => {
    // e.preventDefault();
    try {
      const q = query(postRef, orderBy("timestamp", "desc"));
      const data = await getDocs(q);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setPostArray(filteredData);
      console.log("data fetched");
    } catch (error) {
      console.log(error);
    }
  };
  const handlePostButtonClick = async (e) => {
    // console.log(inputPost);
    e.preventDefault();
    try {
      await addDoc(postRef, {
        userPost: inputPost,
        timestamp: serverTimestamp(),
      });
      console.log("Data submitted");
      setInputPost("");
      postList();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(postRef, {
        userPost: inputPost,
        timestamp: serverTimestamp(),
      });
      console.log("Data submitted");
      setInputPost("");
      postList();
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = async (id) => {
    const delted = doc(db, "posts", id);
    await deleteDoc(delted);
    postList();
    console.log("post delted");
  };
  useEffect(() => {
    postList();
  }, []);
  // console.log(inputPost);
  return (
    <div className="feed">
      <div className="feed-post">
        <form onSubmit={handleSubmit} className="feed-post-top">
          <Avatar className="feed-post-top-avatar" title="User" />
          <input
            value={inputPost}
            // onKeyDown={hanldeKeypress}
            onChange={(e) => setInputPost(e.target.value)}
            placeholder="Start a Post"
            style={{ margin: "15px 10px", padding: "10px" }}
          />
          {inputPost && (
            <button
              onClick={handlePostButtonClick}
              className="feed-post-top-button"
            >
              Post
            </button>
          )}
        </form>
        <div className="feed-post-bottom">
          <HeaderRight Icon={InsertPhotoIcon} title="Photo" />
          <HeaderRight Icon={VideoCameraBackIcon} title="Video" />
          <HeaderRight Icon={EventIcon} title="Event" />
          <HeaderRight Icon={NotesIcon} title="Write Note" />
        </div>
      </div>
      <hr className="feed-horizontal" />
      {/* <div className='post'>
                <div className='post-container'>
                    <div className='post-top'>
                        <Avatar style={{ margin: '10px 5px' }} />
                        <div className='post-top-name'>
                            <p style={{ padding: '' }}>Mehul raj</p>
                            <p style={{ color: 'grey', fontSize: '.8rem' }}>{`${getHours}:${getMin} ${meredian}`}</p>
                        </div>
                    </div>
                    <div className='post-middle'>
                        <p>This is textfladsjf;lkadsjlk;fjlasdjflkjasdlk;jflasdjlfjadsl;fjl;sdajfljasdlkfjladshfgkjadshkfhsadkhfkashdkfhdskajlhfkljashdflkhasdklhflkasj</p>
                    </div>
                    <div className='post-bottom'>
                        <FavoriteBorderIcon />
                        <ModeCommentIcon />
                        <AutorenewIcon />
                        <SendIcon />
                    </div>
                </div>
            </div> */}
      <div className="post">
        {postArray.map((item, index) => {
          const timestamp = item.timestamp && item.timestamp.toDate();
          const timeString = timestamp
            ? timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Unknown";
          return (
            <div className="post-container" key={item.id}>
              <div className="post-top">
                <Avatar style={{ margin: "10px 5px" }} />
                <div className="post-top-name">
                  <p style={{ padding: "" }}>Mehul raj</p>
                  <p style={{ color: "grey", fontSize: ".8rem" }}>
                    {timeString}
                  </p>
                </div>
              </div>
              <div className="post-middle">
                <p>{item.userPost}</p>
              </div>
              <div className="post-bottom">
                <FavoriteBorderIcon className="post-interaction" />
                <ModeCommentIcon className="post-interaction" />
                <AutorenewIcon className="post-interaction" />
                <DeleteIcon
                  onClick={() => deletePost(item.id)}
                  className="post-interaction"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedR;
