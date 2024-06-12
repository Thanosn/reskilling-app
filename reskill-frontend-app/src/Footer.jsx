import FooterTopic from './FooterTopic'
import Socials from './Socials'

function Footer(props) {
  return (
    <div className='mt-24'>
      <hr className='mb-12' />
      <div className='flow-root'>
        <div className='float-start'>
          <div className="font-bold">{props.siteName}</div>
        </div>
        <div className='float-end mr-72'><FooterTopic topic="Topic" /></div>
        <div className='float-end mr-72'><FooterTopic topic="Topic" /></div>
        <div className='float-end mr-72'><FooterTopic topic="Topic" /></div>
      </div>
      <div className='float-start'>
        <Socials />
      </div>
      <div className='mb-12'></div>
    </div>
  )
}

export default Footer

