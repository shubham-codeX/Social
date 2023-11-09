import "./sidebar.css"
import { RssFeed, Chat, PlayCircle, Groups, TurnedInNot, QuestionMark, WorkOutline, Event, School } from "@mui/icons-material"
import {Users} from "../../dummyData"
import Frnds from "../frnds/Frnds"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed className="sidebaricon" />
            <span className="sidelistitemtext">Feed</span>
          </li>

          <li className="sidebarlistitem">
            <Chat className="sidebaricon" />
            <span className="sidelistitemtext">Chats</span>
          </li>

          <li className="sidebarlistitem">
            <Groups className="sidebaricon" />
            <span className="sidelistitemtext">Groups</span>
          </li>

          <li className="sidebarlistitem">
            <PlayCircle className="sidebaricon" />
            <span className="sidelistitemtext">Videos</span>
          </li>

          <li className="sidebarlistitem">
            <TurnedInNot className="sidebaricon" />
            <span className="sidelistitemtext">Bookmarks</span>
          </li>

          <li className="sidebarlistitem">
            <QuestionMark className="sidebaricon" />
            <span className="sidelistitemtext">Question</span>
          </li>

          <li className="sidebarlistitem">
            <WorkOutline className="sidebaricon" />
            <span className="sidelistitemtext">Jobs</span>
          </li>

          <li className="sidebarlistitem">
            <Event className="sidebaricon" />
            <span className="sidelistitemtext">Events</span>
          </li>

          <li className="sidebarlistitem">
            <School className="sidebaricon" />
            <span className="sidelistitemtext">Cources</span>
          </li>
        </ul>
        <button className="sidebutton">Show More</button>
        <hr className="sidebarhr" />
        <ul className="sidebarfrndlist">
          {Users.map((u)=>(
            <Frnds key = {u.id} user ={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
  }
