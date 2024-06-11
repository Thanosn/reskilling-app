
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody';

function App() {
  const SITENAME = "Reskiling App"
  return (
    <>
      <Header siteName={SITENAME} />
      <MainBody />
      <Footer siteName={SITENAME} />
    </>
  )
}

export default App

