import React from 'react'

import './index.scss'

import HomeImage from '@/assets/img/icon-graduate.png'

const HomeContent = () => {
  return (
    <section id="home">
      <div className="home-container is-flex">
        <div className="home-info is-flex">
          <div className="home-info-title">
            <p className="font-larger">Congratulations Sea Scholarship 2019 Awardees!</p>
          </div>

          <div className="home-info-desc">
            <p>The Sea Scholarship Committee is proud to announce the 2019 Academic Year Sea Scholarship recipients. Final award email notifications were sent on October 17, 2019.</p>
          </div>
        </div>

        <div className="home-img">
          <img src={HomeImage} alt="home-image" />
        </div>
      </div>
    </section>
  )
}

export default HomeContent
