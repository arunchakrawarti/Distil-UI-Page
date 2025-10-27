import React from 'react'
import Transforming from '../components/pages/Education Institution/Transforming'
import HighEducation from '../components/pages/Education Institution/HighEducation'
import Digital from '../components/pages/Education Institution/Digital'
import OurEstimation from '../components/pages/Education Institution/OurEstimation'
import Public from '../components/pages/Education Institution/Public'
import Education from '../components/pages/Education Institution/Education'
import Ready from '../components/pages/Education Institution/Ready'


const page = () => {
  return (
    <div>
      <Transforming/>
      <HighEducation/>
      <Digital/>
      <OurEstimation/>
      <Public/>
      <Education/>
      <Ready/>
    </div>
  )
}

export default page
