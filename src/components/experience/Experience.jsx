import React from 'react'
import "./Experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
    <h5 className='padding-left'>What Skills I have</h5>
    <h2 className='padding-left'>My Experience</h2>
    <div className="container experience_container">
    <div className="experience_frontend">
    <h3>Frontend Experience</h3>
    <div className="experience_content">
   
    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>Flutter</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>reactjs</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>HTML</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
  <h4>C#</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>CSS</h4>
    <small className='text-light'>Intermediate </small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>Java</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>javaScript</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>C++</h4>
    <small className='text-light'>Experienced</small>
    </article>

    </div>
    </div>


 <div className="experience_backend">
    <h3>Backend Development</h3>
    <div className="experience_content">
    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>Nodejs</h4>
    <small className='text-light'>Intermediate</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>MongoDB</h4>
    <small className='text-light'>Intermediate</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>PHP</h4>
    <small className='text-light'>Experienced</small>
    </article>

    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>MySQLi</h4>
    <small className='text-light'>Experienced</small>
    </article>
    <article className='experience_detail'>
    <BsPatchCheckFill className='experience_detail-icon'/>
    <h4>Firebase</h4>
    <small className='text-light'>Intermediate</small>
    </article>
  
    </div>
    </div>
    </div>
    </section> 
  )
}

export default Experience
