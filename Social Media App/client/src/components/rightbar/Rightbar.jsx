import { Users } from "../../DummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
