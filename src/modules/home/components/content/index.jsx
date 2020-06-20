import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import HomeContent from '../home'
import ProgramContent from '../program'
import PartnerUniversityContent from '../university'

import './index.scss'
import { mapDispatchToProps } from './function'
import TimelineContent from '../timeline'

const Content = ({ getContent, getUniversities, getFaculties }) => {
  useEffect(() => {
    getContent()
    getUniversities()
    getFaculties()
  }, [])

  return (
    <div className="content-container">
      <HomeContent />
      <ProgramContent />
      <PartnerUniversityContent />
      <TimelineContent />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Content)
