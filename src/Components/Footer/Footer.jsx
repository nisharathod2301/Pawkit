import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/k_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p> </p>
        </div>
        <ul className="footer-links">
            <li>Adopt Me</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Customer Service</li>
            <li>Careers</li>
        </ul>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer