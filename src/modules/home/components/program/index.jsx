import React from 'react'

import './index.scss'
import Card from '@/global/components/card'

import { freshman } from './data/freshman.data'
import { senior } from './data/senior.data'

import FreshmanImage from '@/assets/img/icon-freshmen.png'
import SeniorImage from '@/assets/img/icon-senior.png'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './function'

const ProgramContent = ({ contents }) => {
  console.log(contents.data)
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
              <Card data={freshman} image={FreshmanImage} program={contents.data.freshman_program} />
              <Card data={senior} image={SeniorImage} program={contents.data.senior_program} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramContent)
