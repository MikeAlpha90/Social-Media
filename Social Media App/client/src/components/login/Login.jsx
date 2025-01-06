import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">AlphaSocial</div>
                <div className="loginDesc">Connect with friends and world around you</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="Email" placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="Password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
