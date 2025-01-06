import { Users } from "../../DummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar({Profile}) {

  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Kilo</b> and <b>3 others friends</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u)=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = ()=>{
    return(
      <>
      <div className="rightbarTitle">User Informaiton</div>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City:</div>
          <div className="rightbarInfovalue">Islamabad</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From:</div>
          <div className="rightbarInfovalue">Town</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship:</div>
          <div className="rightbarInfovalue">Married</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City:</div>
          <div className="rightbarInfovalue">Islamabad</div>
        </div>
      </div>
      <h4 className="rightbarTitle">Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/2.jpeg" alt="" />
          <span className="rightbarFollowingName">Khan</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/3.jpeg" alt="" />
          <span className="rightbarFollowingName">Kilo</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/4.jpeg" alt="" />
          <span className="rightbarFollowingName">Delta</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/5.jpeg" alt="" />
          <span className="rightbarFollowingName">Mike</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/6.jpeg" alt="" />
          <span className="rightbarFollowingName">Tango</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="assets/profile pics/7.jpeg" alt="" />
          <span className="rightbarFollowingName">Tango</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}
