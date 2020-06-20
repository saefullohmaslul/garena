import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

import { PrevArrow, NextArrow } from '@/global/components/arrow'
import { connect } from 'react-redux'
import { mapStateToProps, mergeArray } from './function'

const CustomSlider = ({ universities, faculties }) => {
  const [dataUnivAndFaculties, setDataUnivAndFaculties] = useState([])

  useEffect(() => {
    setDataUnivAndFaculties(mergeArray(universities.data, faculties.data))
  }, [universities, faculties])

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
      {dataUnivAndFaculties.length < 0 ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        dataUnivAndFaculties.map(universityAndFaculties => {
          return (
            <div key={universityAndFaculties.id} className="university-container">
              <div className="university is-flex">
                <div className="university-logo">
                  <img src={universityAndFaculties.univ_logo} alt={universityAndFaculties.univ_name} />
                </div>
                <div className="university-info">
                  <div className="university-name">
                    <p>{universityAndFaculties.univ_name}</p>
                  </div>
                  <div className="university-faculty is-flex">
                    {universityAndFaculties.faculties.map((section, index) => {
                      return (
                        <ul key={index}>
                          {section.map(faculty => {
                            return <li key={faculty.id}>{faculty.name}</li>
                          })}
                        </ul>
                      )
                    })}
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
