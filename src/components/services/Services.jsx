import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='service'>
    <h5 className='padding-left'>What I offer</h5>
    <h2 className='padding-left'>Services</h2>
    <div container className="service_container">
    <article className="service">
    <div className="service_head">
    <h3>Web development</h3>
    </div>
    <ul className='service_list'>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Gather the website information </p>
    </li>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Design the figma of website</p>
    </li>
    
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Implement the web based on the client need</p>
    </li>
    
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Evaluate the web based functionality</p>
    </li>

    </ul>
    </article>

    <article className="service">
    <div className="service_head">
    <h3>Application development</h3>
    </div>
    <ul className='service_list'>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Gather the Application information </p>
    </li>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Design the figma of Application</p>
    </li>
    
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Implement the Application based on the client need</p>
    </li>
    
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Evaluate the app based functionality,availability and speed</p>
    </li>
    
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Redo if there is feedback from client</p>
    </li>
    
    </ul>
    </article>
    <article className="service">
    <div className="service_head">
    <h3>Figma design</h3>
    </div>
    <ul className='service_list'>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Design figma  for Application developer or web developer </p>
    </li>
    <li>
    <BiCheck className='service_list-icon'/>
    <p>Evaluate it with developer</p>
    </li>

    
    </ul>
    </article>
    </div>
    </section>
  )
}

export default Services
