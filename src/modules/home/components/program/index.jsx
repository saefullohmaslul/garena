import React from 'react'
import { connect } from 'react-redux'

import './index.scss'

import Card from '@/global/components/card'
import FreshmanImage from '@/assets/img/icon-freshmen.png'
import SeniorImage from '@/assets/img/icon-senior.png'
import { mapStateToProps } from './function'

const ProgramContent = ({ contents }) => {
  return (
    <section id="program">
      <div className="title">
        <p>Undergraduate Scholarship Program</p>
      </div>
      <div className="program-content">
        <div className="program-content-desc">
          {contents.isLoading ? (
            <div>
              <p>Loading</p>
            </div>
          ) : (
            <p>{contents.data.program_content}</p>
          )}
        </div>
        <div className="program-content-items">
          {contents.isLoading ? (
            <div>
              <p>Loading</p>
            </div>
          ) : (
            <>
              <Card title="Sea Freshman Scholarship Program" image={FreshmanImage} program={contents.data.freshman_program} />
              <Card title="Sea Senior Scholarship Program" image={SeniorImage} program={contents.data.senior_program} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default connect(mapStateToProps, null)(ProgramContent)
