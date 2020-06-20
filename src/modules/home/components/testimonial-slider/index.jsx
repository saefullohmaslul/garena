import React from 'react'
import Slider from 'react-slick'

import './index.scss'

import { PrevArrow, NextArrow } from '@/global/components/arrow'
import { connect } from 'react-redux'
import { mapStateToProps } from './function'

const TestimonialSlider = ({ testimonials }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }

  return (
    <Slider {...settings}>
      {testimonials.isLoading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        testimonials.data.map(testimonial => {
          return (
            <div key={testimonial.id} className="testimonial-container">
              <div className="testimonial is-flex">
                <div className="testimonial-img">
                  <img src={testimonial.image} alt="person" />
                </div>
                <div className="testimonial-desc is-flex">
                  <div className="testimonial-content">
                    <p>{testimonial.story}</p>
                  </div>
                  <div className="testimonial-person">
                    <p>{testimonial.name}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      )}
    </Slider>
  )
}

export default connect(mapStateToProps, null)(TestimonialSlider)
