import React from 'react'

import './index.scss'
import Card from '@/global/components/card'

import { freshman } from './data/freshman.data'
import { senior } from './data/senior.data'

import FreshmanImage from '@/assets/img/icon-freshmen.png'
import SeniorImage from '@/assets/img/icon-senior.png'

const ProgramContent = () => {
  return (
    <section id="program">
      <div className="title">
        <p>Undergraduate Scholarship Program</p>
      </div>
      <div className="program-content">
        <div className="program-content-desc">
          <p>
            We are excited to announce that Sea Indonesia is now partnering with five universities in Indonesia and offering a merit-based scholarship to bright Indonesian students. This scholarship
            is our commitment to give back to the community by empowering youth through education. Through this scholarship, we hope to provide talented students with the opportunity to pursue a
            bachelor’s degree and solve the talent-gap issue in the technology industry in Indonesia.
          </p>
        </div>
        <div className="program-content-items">
          <Card data={freshman} image={FreshmanImage} />
          <Card data={senior} image={SeniorImage} />
        </div>
      </div>
    </section>
  )
}

export default ProgramContent
