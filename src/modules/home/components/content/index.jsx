import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import HomeContent from '../home'
import ProgramContent from '../program'
import PartnerUniversityContent from '../university'

import './index.scss'
import { mapDispatchToProps } from './function'
import TimelineContent from '../timeline'
import TestimonialContent from '../testimonial'
import ApplyHereContent from '../apply-here'
import FAQContent from '../faq'
import Footer from '@/global/components/footer'

const Content = ({ getContent, getUniversities, getFaculties, getTestimonials }) => {
  useEffect(() => {
    getContent()
    getUniversities()
    getFaculties()
    getTestimonials()
  }, [])

  return (
    <div className="content-container">
      <HomeContent />
      <ProgramContent />
      <PartnerUniversityContent />
      <TimelineContent />
      <TestimonialContent />
      <ApplyHereContent />
      <FAQContent />
      <Footer />
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Content)
