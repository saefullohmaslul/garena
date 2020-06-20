import React from 'react'

import TimelineLogo1 from '@/assets/img/Timeline-1.png'
import TimelineLogo2 from '@/assets/img/Timeline-2.png'
import TimelineLogo3 from '@/assets/img/Timeline-3.png'
import TimelineLogo4 from '@/assets/img/Timeline-4.png'

import './index.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from './function'
import TimelineStep from '../timeline-step'

const TimelineContent = ({ contents }) => {
  return (
    <section id="timeline">
      <div className="title">
        <p>Timeline</p>
      </div>

      {contents.isLoading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <div className="timeline-content is-flex">
          <TimelineStep stepName="Registration" logo={TimelineLogo1} alt="registration-logo" date={contents.data.date_regis} isDivider={true} />
          <TimelineStep stepName="Essay and CV Screening" logo={TimelineLogo2} alt="screening-logo" date={contents.data.date_esay_cvscreen} isDivider={true} />
          <TimelineStep stepName="On-campus Interview" logo={TimelineLogo3} alt="interview-logo" date={contents.data.date_interview} isDivider={true} />
          <TimelineStep stepName="Announcement of Selected Scholars" logo={TimelineLogo4} alt="announcement-logo" date={contents.data.date_announce} isDivider={false} />
        </div>
      )}
    </section>
  )
}

export default connect(mapStateToProps, null)(TimelineContent)
