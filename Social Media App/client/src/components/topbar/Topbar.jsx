import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Alphasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon"/>
          <input
            placeholder="Search for post, friend, video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon className="topbarIconItemIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon className="topbarIconItemIcon"/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon className="topbarIconItemIcon"/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/profile pics/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
