import React from 'react'
import Future from '../components/pages/SkillCenter/Future'
import OurAdmission from '../components/pages/SkillCenter/OurAdmission'
import Popular from '../components/pages/SkillCenter/Popular'
import Photo from '../components/pages/SkillCenter/Photo'
import Trainees from '../components/pages/SkillCenter/Trainees'
import Redy from '../components/pages/SkillCenter/Redy'

const page = () => {
  return (
    <div>
      <Future/>
      <OurAdmission/>
      <Popular/>
      <Photo/>
      <Trainees/>
      <Redy/>
    </div>
  )
}

export default page
