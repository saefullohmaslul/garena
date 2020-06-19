import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

import Slider from '@/global/components/slider'

const PartnerUniversityContent = () => {
  return (
    <section className="partner-university">
      <div className="title">
        <p>Partner Universities</p>
      </div>
      <div className="slider">
        <Slider />
      </div>
    </section>
  )
}

export default PartnerUniversityContent
