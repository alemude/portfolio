import React from 'react'
import "./Contact.css"
import {MdOutlineMail} from "react-icons/md"
import {HiOutlinePhoneMissedCall} from "react-icons/hi"
import {AiOutlineMessage} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineFacebook} from "react-icons/ai"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3dfx216', 'template_7t9kwim', form.current, '3N73VHiEM-V7kxlAg')
      .then((result) => {
        e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
    <h5 className='padding-left'>Get in Touch</h5>
    <h2 className='padding-left'>Contact Me</h2>
    <div className="container contact_container">
    <div className="contact_options">

    <article className="contact_option">
    <h4>Twitter</h4>
    <a href='https://twitter.com/AlemuDerebe7'>
    <BsTwitter className='contact_option-icon'/>
    </a>
    </article>

    <article className="contact_option">
    <HiOutlinePhoneMissedCall className='contact_option-icon'/>
    <h4>Call</h4>
    <h5>+251922<br/>
    818038</h5>
    </article>

    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type='text'name='name' placeholder='Your full name' required/>
    <input type='email'name='email' placeholder='Your Email' required/>
   <textarea type='text' name='message' placeholder='Your massage' rows='7' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
   </form>
    </div>   
    </section>
  )
}

export default Contact
