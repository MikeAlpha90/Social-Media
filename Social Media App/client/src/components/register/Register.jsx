import "./register.css"

export default function Register() {
  return (
    <div className='register'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <div className="loginLogo">AlphaSocial</div>
                <div className="loginDesc">Connect with friends and world around you</div>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="text" placeholder="Username" className="loginInput" />
                    <input type="Email" placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="Password" className="loginInput" />
                    <input type="Password" placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Singup</button>
                    <button className="loginRegisterButton">Login to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
