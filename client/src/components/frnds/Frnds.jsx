import "./frnds.css"

export default function Frnds({user}) {
  return (
    <li className="sidebarfrnd">
            <img src={user.profilePicture} alt="" className="sidebarfrndimage" />
            <span className="sidebarfrndname">{user.username}</span>
    </li>
  )
}
