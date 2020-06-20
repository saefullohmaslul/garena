import React from 'react'

import './index.scss'

const TimelineStep = ({ stepName, logo, alt, date, isDivider }) => {
  return (
    <div className="timeline-step">
      <div className="step-title">
        <p>{stepName}</p>
      </div>
      <div className="step-logo">
        <img src={logo} alt={alt} />
      </div>
      <div className="step-info">{date}</div>
      {isDivider ? <div className="divider"></div> : null}
    </div>
  )
}

export default TimelineStep
