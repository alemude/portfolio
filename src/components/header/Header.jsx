import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from '../../assets/me.jpg'
const Header = () => {
  return (
<header>
<div className="container header_container">
<h5 className='header-above'>Hello I am</h5>
<h1 className='header-above'>Alemu Derebe</h1>
<h5 className="text-light header-above">Full stack developer</h5>
<CTA/>
<div className="me">
<img src={ME} alt="me"/>
</div> 
<a href='#contact' className='scroll_down'>Scroll Down</a>
</div>
</header>
  )
}

export default Header
