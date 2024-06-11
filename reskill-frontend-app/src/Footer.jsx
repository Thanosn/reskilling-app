import FooterTopic from './FooterTopic'
import Socials from './Socials'

function Footer(props) {
  return (
    <>
      <h1>{props.siteName}</h1>
      <Socials />
      <FooterTopic topic="Topic"/>
      <FooterTopic topic="Topic"/>
      <FooterTopic topic="Topic"/>
    </>
  )
}

export default Footer

