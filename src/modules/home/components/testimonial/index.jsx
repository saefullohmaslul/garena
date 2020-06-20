import React from 'react'
import TestimonialSlider from '../testimonial-slider'

import './index.scss'

const TestimonialContent = () => {
  return (
    <section id="testimonial">
      <div className="title">
        <p>Testimonials</p>
      </div>

      <div className="slider">
        <TestimonialSlider />
      </div>
    </section>
  )
}

export default TestimonialContent
