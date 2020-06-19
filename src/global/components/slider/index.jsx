import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.scss'

import LogoITS from '@/assets/img/Logo_ITS.png'

import { PrevArrow, NextArrow } from '../arrow'

const CustomSlider = () => {
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
      <div className="university-container">
        <div className="university is-flex">
          <div className="university-logo">
            <img src={LogoITS} alt="logo-its" />
          </div>
          <div className="university-info">
            <div className="university-name">
              <p>Universitas Jenderal Soedirman</p>
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

      <div className="university-container">
        <div className="university is-flex">
          <div className="university-logo">
            <img src={LogoITS} alt="logo-its" />
          </div>
          <div className="university-info">
            <div className="university-name">
              <p>Universitas Jenderal Soedirman</p>
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
    </Slider>
  )
}

export default CustomSlider
