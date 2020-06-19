import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

import { PrevArrow, NextArrow } from '@/global/components/arrow'
import { connect } from 'react-redux'
import { mapStateToProps } from './function'

const CustomSlider = ({ universities }) => {
  console.log(universities.data)
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
      {universities.isLoading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        universities.data.map(university => {
          return (
            <div key={university.id} className="university-container">
              <div className="university is-flex">
                <div className="university-logo">
                  <img src={university.univ_logo} alt={university.univ_name} />
                </div>
                <div className="university-info">
                  <div className="university-name">
                    <p>{university.univ_name}</p>
                  </div>
                  <div className="university-faculty is-flex">
                    <ul>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                    </ul>
                    <ul>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                      <li>Fakultas A</li>
                    </ul>
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

export default connect(mapStateToProps, null)(CustomSlider)
