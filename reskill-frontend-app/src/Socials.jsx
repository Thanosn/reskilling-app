
import fbLogo from './assets/fb.svg'
import linkedLogo from './assets/linkedIn.svg'
import youtubeLogo from './assets/youtube.svg'
import instaLogo from './assets/instagram.svg'

function Socials() {
  return (
    <div className='flex'>
      <div className='mr-3'><a href=''><div className='p-3 border-2 border-transparent hover:border-current'><img src={fbLogo} width='24' /></div></a></div>
      <div className='mr-3'><a href=''><div className='p-3 border-2 border-transparent hover:border-current'><img src={linkedLogo} width='24' /></div></a></div>
      <div className='mr-3'><a href=''><div className='p-3 border-2 border-transparent hover:border-current'><img src={youtubeLogo} width='24' /></div></a></div>
      <div className='mr-3'><a href=''><div className='p-3 border-2 border-transparent hover:border-current'><img src={instaLogo} width='24' /></div></a></div>
    </div>
  )
}

export default Socials

