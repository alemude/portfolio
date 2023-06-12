import React from 'react'
import "./Footer.css"
import {BsGithub,BsLinkedin} from "react-icons/bs";
import {AiOutlineTwitter} from "react-icons/ai";
import Logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer>
 <img src={Logo} className='footer_logo' alt='logo'/>
    <ul className='permalinks'>
    <li><a href='#'>Home</a></li>
    <li><a href='#about'>About</a></li>
    <li><a href='#experience'>Experience</a></li>
    <li><a href='#service'>Service</a></li>
    <li><a href='#portfolio'>Portfolio</a></li>
    <li><a href='#testimonials'>Testimonials</a></li>
    <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className="footer_socials">
    <a href='https://www.linkedin.com/in/alemu-derebe-143478276/' target='_blank'><BsLinkedin/></a>
    <a href='https://github.com/alemude' target='_blank'><BsGithub/></a>
    <a href='https://twitter.com/AlemuDerebe7' target='_blank'><AiOutlineTwitter/></a>

    </div>
    <div className="footer_copy-right">
    <small>
    &copy; Alemu Derebe All right are reserved.
    </small>
    </div>
    </footer>
  )
}

export default Footer
