
import './App.css'
import Carousel from './Components/Carousel'
import Footer from './Widgets/Footer/Footer'
import Header from './Widgets/Header/header'
import MainBanner from './Widgets/MainBanner/MainBanner'
import { carouselImages } from './Data/carouselData'

function App() {

  return (
    <>
    <Header/>
    <Carousel carouselImages={carouselImages}/> 
      <MainBanner/>
    <Footer/>
    </>
  )
}

export default App
