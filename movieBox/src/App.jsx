import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import FeaturedMovie from './components/FeaturedMovie'
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeroSection />
      <FeaturedMovie />
      <Footer />
      <MovieDetails />
    </div>
  )
}

export default App
