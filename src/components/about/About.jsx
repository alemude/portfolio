import React from 'react'
import ME from '../../assets/me2.jpg'
import "./About.css"
import {FaAward,FaRegFolder} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
const About = () => {
  return (
    <section id='about'>
    <h5 className='padding'>Get to know</h5>
    <h2 className='padding'>About Me</h2>
    <div className="container about_container about_about">
    <div className="about_me">
    <div className="about_me-image">
    <img src={ME} alt='About image'/>
    </div>
   
    </div>
    
    <div className="about_content">
    <div className="about_cards">
    <article className="about_card">
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>1 year working</small>
    </article>

    <article className="about_card">
    <FiUsers className='about_icon'/>
    <h5>Clients</h5>
    <small>10+ Worldwide</small>
    </article>

    <article className="about_card">
    <FaRegFolder className='about_icon'/>
    <h5>Projects</h5>
    <small>11+ completed Projects</small>
    </article>
    </div>
    <p>
A motivated, responsible and adaptable computing graduate seeking a position in a
computer science and related position who will utilize the professional and technical
skills developed through the past study and training after graduate in this field. I have strong drive to see things
through to completion. I am junior programmer with proven skill in MERN Stack, Flutter, C#,PHP, HTML, C++, JAVA, 
,SQLI, Java script and CSS.
    </p>
    <a href='#contact'className='btn btn-primary'>Let's Talk</a>
    </div>
    </div>
    </section>
  )
}

export default About
