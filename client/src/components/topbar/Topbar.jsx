import "./topbar.css"
import {Search, Person , Chat, Notifications} from "@mui/icons-material"
export default function Topbar() {
  return (
    <div className="topbarcontainer">
        <div className="topbarleft">
          <span className="logo">Psocial</span>
        </div>
        <div className="topbarcenter">
          <div className="searchbar">
                <Search className="searchicon"/>
                <input placeholder="Search for Friends and Posts" className="searchinput" />
          </div>
        </div>
        <div className="topbarright">
          <div className="topbarlinks">
            <span className="topbarlinks">Home</span>
            <span className="topbarlinks">Timeline</span>
          </div>
          <div className="topbaricons">
            <div className="topbariconitem">
              <Person/>
              <span className="topbariconbadge">
                1
              </span>
            </div>

            <div className="topbariconitem">
              <Chat/>
              <span className="topbariconbadge">
                2
              </span>
            </div>

            <div className="topbariconitem">
              <Notifications/>
              <span className="topbariconbadge">
                1
              </span>
            </div> 
          </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarimage" />
        </div>
    </div>
  )
}