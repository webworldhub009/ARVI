import React from 'react'
import ArivAbout from '../Component/About/ArivAbout'
import AboutHeroARVI from '../Component/About/AboutHeroARVI'
import MissionVisionARVI from '../Component/About/MissionVisionARVI'
import CommitmentToExcellence from '../Component/About/CommitmentToExcellence'
import HowArviWorks from '../Component/Home/HowArviWorks'

function About() {
  return (
    <div>
      <AboutHeroARVI />
      <ArivAbout />
      <MissionVisionARVI />
      <HowArviWorks />
      <CommitmentToExcellence />
    </div>
  )
}

export default About
