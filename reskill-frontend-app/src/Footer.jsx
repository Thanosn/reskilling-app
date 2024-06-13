import FooterTopic from './FooterTopic'
import Socials from './Socials'

function Footer(props) {
  return (
    <div className='pt-24'>
      <hr className='mb-12' />
      <div className='flow-root'>
        <div className='float-start'>
          <div className="footer-site-name-font">{props.siteName}</div>
        </div>
        <div className='float-end mr-56'><FooterTopic topic="Topic 3" /></div>
        <div className='float-end mr-64'><FooterTopic topic="Topic 2" /></div>
        <div className='float-end mr-64'><FooterTopic topic="Topic 1" /></div>
      </div>
      <div className='-mt-12'>
        <Socials />
      </div>
      <div className='mt-12'></div>
      <div className='pb-12'></div>
    </div>
  )
}

export default Footer


