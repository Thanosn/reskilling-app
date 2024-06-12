import { useState } from 'react'

import fbLogo from './assets/fb.svg'
import linkedLogo from './assets/linkedIn.svg'
import youtubeLogo from './assets/youtube.svg'
import instaLogo from './assets/instagram.svg'

function Socials() {
  return (
    <>
      <div className='float-start mr-12'><a href=''><img src={fbLogo} width='24'/></a></div>
      <div className='float-start mr-12'><a href=''><img src={linkedLogo} width='24'/></a></div>
      <div className='float-start mr-12'><a href=''><img src={youtubeLogo} width='24'className='pt-0.5'/></a></div>
      <div className='float-start mr-12'><a href=''><img src={instaLogo} width='24'/></a></div>
    </>
  )
}

export default Socials

