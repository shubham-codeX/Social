import "./online.css"

export default function Online({user}) {
  return (
    <li className="rightbarfrnd">
    <div className="rightbarprofileimgcontainer">
      <img src={user.profilePicture} alt="" className="rightbarimg" />
      <span className="rightbaronline"></span>
    </div>
    <span className="rightbarusername">{user.username}</span>
  </li>
  )
}
