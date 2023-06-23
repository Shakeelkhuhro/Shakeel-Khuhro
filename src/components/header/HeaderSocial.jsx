import React from 'react';
import {FiLinkedin} from 'react-icons/fi';
import {VscGithub} from 'react-icons/vsc'
import {LuTwitter} from 'react-icons/lu'

const HeaderSocial = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/shakeelkhuhro/" target='_balnk'><FiLinkedin/></a>
        <a href="https://github.com/Shakeelkhuhro" target='_balnk'><VscGithub/></a>
        <a href="https://twitter.com/imshakeelkhuhro" target='_balnk'><LuTwitter/></a>
    </div>
  )
}

export default HeaderSocial