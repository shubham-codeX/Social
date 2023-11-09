import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Social</h3>
                <span className="logindesc"> Connect with world around you</span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Email/Username" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginbutton">Login</button>
                    <span className="loginforgot">Forgot Password ?</span>
                    <button className="loginregister">Create a New Account</button>

                </div>
            </div>
        </div>
    </div>
  )
}
