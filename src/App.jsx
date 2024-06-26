import { CarouselDiv } from './components/Carousel/CarouselDiv'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { SearchBar } from './components/SearchBar/SearchBar'

function App() {
  return (
      <div id='app'>
        <Header />
        <SearchBar />
        <CarouselDiv />
        <Footer />
      </div>
  )
}

export default App
