import FooterTopic from './FooterTopic'
import Socials from './Socials'

import "./Footer.css"

function Footer(props) {
  return (
    <div className='rat-pt-24'>
      <hr className='rat-mb-12' />
      <div className='rat-flow-root'>
        <div className='rat-float-start'>
          <div className="footer-site-name-font">{props.siteName}</div>
        </div>
        <div className='rat-float-end rat-mr-56'><FooterTopic topic="Topic 3" /></div>
        <div className='rat-float-end rat-mr-64'><FooterTopic topic="Topic 2" /></div>
        <div className='rat-float-end rat-mr-64'><FooterTopic topic="Topic 1" /></div>
      </div>
      <div className='-rat-mt-12'>
        <Socials />
      </div>
      <div className='rat-mt-12'></div>
      <div className='rat-pb-12'></div>
    </div>
  )
}

export default Footer


