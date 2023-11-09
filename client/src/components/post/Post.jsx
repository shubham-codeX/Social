import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData";
import {useState} from "react"


export default function Post({post}) { 
    const [like, setLike] = useState(post.like)
    const [isliked, setisLike] = useState(false)
    const likeHandler=()=>{
        setLike(isliked ? like-1 : like+1)
        setisLike(!isliked)
    }
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img className="postprofileimg" 
                      src=  {Users.filter(u=>u.id === post.userId)[0].profilePicture}  alt="" />
                    <span className="postusername">
                        {Users.filter(u=>u.id === post.userId)[0].username}
                    </span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post?.desc}</span>
                <img className="postimg" src={post.photo} alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className="likeicon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeicon" src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="count">{like}</span>
                </div>
                <div className="postbottomright">
                    <span className="postcomment">{post?.comment} comments</span>
                </div>

            </div>
        </div>
        
    </div>
  )
}
