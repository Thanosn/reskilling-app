
import Header from './Header'
import Footer from './Footer/Footer'
import MainBody from './MainBody';

function App() {
  const SITENAME = "Reskiling Posts App"
  return (
    <div className='rat-pt-4 rat-px-24'>
      <Header siteName={SITENAME} />
      <MainBody />
      <Footer siteName={SITENAME} />
    </div>
  )
}

export default App
