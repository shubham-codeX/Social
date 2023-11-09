import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";
export default function Home() {
  return (
    <>
    {/* .container */}
    <Topbar/>
    <div className="homecontainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
  )
}

