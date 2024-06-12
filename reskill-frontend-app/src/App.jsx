
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody';

function App() {
  const SITENAME = "Reskiling App"
  return (
    <div className='pt-4 px-24'>
      <Header siteName={SITENAME} />
      <MainBody />
      <Footer siteName={SITENAME} />
    </div>
  )
}

export default App
