import React from 'react'
import ArivHero from '../Component/Home/ArivHero'
import ArivAbout from '../Component/About/ArivAbout'
import ArivServicesSection from '../Component/Services/ArivServicesSection'
import ArivServices from '../Component/Services/ArivServices'
import ArivOurWork from '../Component/Services/ArivOurWork'
import ArviCTA from '../Component/Contact/ArviCTA'
import KeyDifferentiators from '../Component/Home/KeyDifferentiatorsTimeline'

function Home() {
  return (
    <div>
      <ArivHero />
      <ArivAbout />
      <ArivServices />
      <ArivServicesSection />
      <KeyDifferentiators />
      <ArivOurWork />
      <ArviCTA />
    </div>
  )
}

export default Home
