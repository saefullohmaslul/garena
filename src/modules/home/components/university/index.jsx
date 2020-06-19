import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

import UniversitySlider from '../university-slider'

const PartnerUniversityContent = () => {
  return (
    <section className="partner-university">
      <div className="title">
        <p>Partner Universities</p>
      </div>
      <div className="slider">
        <UniversitySlider />
      </div>
    </section>
  )
}

export default PartnerUniversityContent
