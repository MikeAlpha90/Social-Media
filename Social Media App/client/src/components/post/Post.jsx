import { useState } from "react";
import { Users } from "../../DummyData";
import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";


export default function Post({post}) {

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = ()=>{
    setLike(isLiked? like-1 : like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u)=>u.id===post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight"></div>
          <MoreVertIcon className="postIcon" /> 
        </div>
        <div className="postCenter">
            <div className="postText">{post?.desc}</div>
            <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="postIcon" src="/assets/like.png" onClick={handleLike} alt="" />
                <img className="postIcon" src="/assets/heart.png" onClick={handleLike} alt="" />
                <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
