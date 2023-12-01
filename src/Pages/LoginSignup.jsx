import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign up</h1>
          <div className="loginsignup-feilds">
            <input type="text"placeholder='Name' />
            <input type="email"placeholder='Email' />
            <input type="password"placeholder='Password' />
          </div>
          <button>Woof</button>
          <p className="loginsignup-login">Already have a dog? <span>Login</span></p>
          
        </div>
    </div>
  )
}

export default LoginSignup