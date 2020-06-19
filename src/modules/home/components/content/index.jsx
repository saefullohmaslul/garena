import React from 'react'

import HomeContent from '../home'
import ProgramContent from '../program'
import PartnerUniversityContent from '../university'

import './index.scss'

const Content = () => {
  return (
    <div className="content-container">
      <HomeContent />
      <ProgramContent />
      <PartnerUniversityContent />
    </div>
  )
}

export default Content
