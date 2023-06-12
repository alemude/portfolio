import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {AiOutlineTwitter} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/alemu-derebe-143478276/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/alemude' target='_blank'><BsGithub/></a>
      <a href='https://twitter.com/AlemuDerebe7' target='_blank'><AiOutlineTwitter/></a>
    </div>
  )
}

export default HeaderSocials
