import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import FeaturedMovie from './components/FeaturedMovie'
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails'
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HeroSection />
      <FeaturedMovie />
      <Footer />
      <MovieDetails /> */}

      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/" element={<FeaturedMovie/>} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
