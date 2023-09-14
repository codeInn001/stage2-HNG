import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import HeroSection from './components/FeaturedMovie'
import FeaturedMovie from './components/FeaturedMovie'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <FeaturedMovie />
    </>
  )
}

export default App
