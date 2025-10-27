import React from 'react'
import Insight from '../components/pages/Insight/Insight'
import Latest from '../components/pages/Insight/Latest'
import Depth from '../components/pages/Insight/Depth'
import Media from '../components/pages/Insight/Media'
import Creating from '../components/pages/Insight/Creating'
import Success from '../components/pages/Insight/Success'
import Repository from '../components/pages/Insight/Repository'

const page = () => {
  return (
    <div>
      <Insight/>
      <Latest/>
      <Success/>
      <Depth/>
      <Media/>
      <Creating/>
      <Repository/>
    </div>
  )
}

export default page
