import React from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className='loginsignup-fields'>
            <input type="text" placeholder='Your Name' id="" />
            <input type="email" placeholder='Email Address' id="" />
            <input type="password" placeholder='Password' id="" />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span> </p>
        <div className="loginsignup-agree"><input type="checkbox" />
        <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
    </div>
    </div>
  )
}

export default LoginSignup