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
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">

                            <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileuserimg" />

                        </div>
                    </div>
                    <div className="profileinfo">
                        <h4 className="profileinfoname">Shubham</h4>
                        <span className="profileinfodesc">Hello my people</span>
                    </div>
                    <div className="profilerightbottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}
