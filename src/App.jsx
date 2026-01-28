import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ModernNavbar from './Component/ModernNavbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'

import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

import Service from './Pages/Service'
// import Projects from './Pages/Certificate'
import FloatingContactButtons from './Component/FloatingContactButtons'
import ScrollToTop from './Pages/ScrollToTop'
import ServiceDetail from './Component/Services/ServiceDetail'
import Certificate from './Pages/Certificate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='text-amber-300'>ARIV</h1> */}
     <FloatingContactButtons/>
     <ModernNavbar/>
     <ScrollToTop/>

     {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Service />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
     <Footer/>
    </>
  )
}

export default App
