import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
                <img className="profileCoverImg" src="assets/posts/4.jpg" alt="" />
                <img className="profileUserImg" src="assets/profile pics/10.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Alpha Kilo</h4>
                <span className="profileInfoDesc">Hello! this is my Social Media Profile</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile/>
          </div>
        </div>
      </div>
    </>
  );
}
