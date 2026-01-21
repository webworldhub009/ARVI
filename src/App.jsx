import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModernNavbar from './Component/ModernNavbar'
import Footer from './Component/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className='text-amber-300'>ARIV</h1> */}
     <ModernNavbar/>
     <Home/>
     {/* <About/>
     <Services/> */}

     <Footer/>
    </>
  )
}

export default App
