import { useState } from 'react'

import fbLogo from './assets/fb.svg'
import linkedLogo from './assets/linkedIn.svg'
import youtubeLogo from './assets/youtube.svg'
import instaLogo from './assets/instagram.svg'

function Socials() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a href=''><img src={fbLogo}/></a>
      <a href=''><img src={linkedLogo}/></a>
      <a href=''><img src={youtubeLogo}/></a>
      <a href=''><img src={instaLogo}/></a>
    </>
  )
}

export default Socials
