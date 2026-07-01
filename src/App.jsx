
import './App.css'
import DicsParts from './Widgets/DicsPart/DicsPart'
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/Header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import SecondBanner from './Widgets/SecondBanner/SecondBanner'

function App() {

  return (
    <>
    <Header/>
      <MainBanner/>
      <SecondBanner/>
      <DicsParts/>
    <Footer/>
    </>
  )
}

export default App
