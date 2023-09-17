import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import FeaturedMovie from './components/FeaturedMovie'
import Footer from './components/Footer'
import MovieDetails from './components/MovieDetails'
import Error404 from './components/Error404'
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
        <Route path="*" element={<Error404 />} />
        <Route path="movies/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  )
}

export default App
