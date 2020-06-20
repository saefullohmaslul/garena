import React from 'react'
import Slider from 'react-slick'

import './index.scss'

import { PrevArrow, NextArrow } from '@/global/components/arrow'

const TestimonialSlider = () => {
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
      <div className="testimonial-container">
        <div className="testimonial is-flex">
          <div className="testimonial-img">
            <img src="https://web.cdn.id.garenanow.com/webid/scholarship/Ivan-UI.png" alt="person" />
          </div>
          <div className="testimonial-desc is-flex">
            <div className="testimonial-content">
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad corrupti magni quas quod minus nobis ipsa praesentium molestiae? Soluta sequi temporibus labore doloribus ea esse veritatis
                aperiam perferendis. Aspernatur, doloremque!"
              </p>
            </div>
            <div className="testimonial-person">
              <p>Saefulloh Maslul</p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default TestimonialSlider
