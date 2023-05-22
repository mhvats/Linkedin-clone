import './feedBottom.css'
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HeaderRight from "../header/headerRight";
export const FeedBottom = (props) => {
  return (
    <div className="feed-bottom-container">
      <div className="feed-bottom-icon">
        <HeaderRight Icon={HomeIcon} title="Home" />
        <HeaderRight Icon={WorkIcon} title="Job" />
        <HeaderRight Icon={MessageIcon} title="Message" />
        <HeaderRight Icon={NotificationsIcon} title="Notification" />
      </div>
    </div>
  );
};
