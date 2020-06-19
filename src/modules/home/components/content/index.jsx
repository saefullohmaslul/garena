import React from 'react'

import HomeContent from '../home'
import ProgramContent from '../program'

import './index.scss'

const Content = () => {
  return (
    <div className="content-container">
      <HomeContent />
      <ProgramContent />
    </div>
  )
}

export default Content
