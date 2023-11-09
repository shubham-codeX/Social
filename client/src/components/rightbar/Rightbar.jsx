import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({profile}) {
  const Homerightbar=()=>{
    return (<>
    <div className="birthdaycontainer">
          <img className="birthdayimg" src="/assets/gift.png" alt="" />
          <span className="birthdaytxt">
            <b>Luffy</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarad" />
        <h4 className="rightbartitle">Online Friends</h4>
        <ul className="rightbarfrndlist">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
    </>
    );
  };

  const Profilerightbar =()=> {
    return (
      <>
      <h4 className="rightbartitle">User information</h4>
      <div className="rightbarinfo">
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">City:</span>
          <span className="rightbarinfovalue">New York</span>
        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">From:</span>
          <span className="rightbarinfovalue">Madrid</span>
        </div>
        <div className="rightbarinfoitem">
          <span className="rightbarinfokey">Relationship:</span>
          <span className="rightbarinfovalue">Single</span>
        </div>
      </div>

      <h4 className="rightbartitle">User Friends</h4>
      <div className="rightbarfollowings">
        <div className="rightbarfollowing">
          <img src="assets/person/1.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Jimbei</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person/2.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Navy</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person/3.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Naruto</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Ichigo</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person/5.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">World</span>
        </div>
        <div className="rightbarfollowing">
          <img src="assets/person/7.jpeg" alt="" className="rightbarfollowingimg" />
          <span className="rightbarfollowingname">Mr. 3</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        {profile ?<Profilerightbar/>: <Homerightbar/>}
         {/* <Homerightbar/> */}
      </div>
    </div>
  );
}
