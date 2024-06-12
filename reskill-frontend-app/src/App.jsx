
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody';

function App() {
  const SITENAME = "Reskiling App"
  return (
    <div className='pt-4 pl-16 pr-16'>
      <Header siteName={SITENAME} />
      <MainBody />
      <Footer siteName={SITENAME} />
    </div>
  )
}

export default App

