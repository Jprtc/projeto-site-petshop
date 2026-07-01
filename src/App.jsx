
import './App.css'
import DicsParts from './Widgets/DicsPart/DicsPart'
import Carousel from './Components/Carousel'
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/Header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import SecondBanner from './Widgets/SecondBanner/SecondBanner'
import { carouselImages } from './Data/carouselData'

function App() {

  return (
    <>
    <Header/>
    <Carousel carouselImages={carouselImages}/> 
      <SecondBanner/>
      <DicsParts/>
    <Footer/>
    </>
  )
}

export default App
