import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import HomeContent from '../home'
import ProgramContent from '../program'
import PartnerUniversityContent from '../university'

import './index.scss'
import { mapStateToProps, mapDispatchToProps } from './function'

const Content = ({ getContent }) => {
  useEffect(() => {
    getContent()
  }, [])

  return (
    <div className="content-container">
      <HomeContent />
      <ProgramContent />
      <PartnerUniversityContent />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
