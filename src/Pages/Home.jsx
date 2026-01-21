import React from 'react'
import ArivHero from '../Component/Home/ArivHero'
import ArivAbout from '../Component/About/ArivAbout'
import ArivServicesSection from '../Component/Services/ArivServicesSection'
import ArivServices from '../Component/Services/ArivServices'
import ArivOurWork from '../Component/Services/ArivOurWork'

function Home() {
  return (
    <div>
      <ArivHero />
      <ArivAbout />
      <ArivServices />
      <ArivServicesSection />
      <ArivOurWork />
    </div>
  )
}

export default Home
