import React from 'react'
import { connect } from 'react-redux'
import parser from 'html-react-parser'

import './index.scss'

import { mapStateToProps } from './function'

const FAQContent = ({ contents }) => {
  return (
    <section id="faq">
      <div className="title">
        <p>FAQ</p>
      </div>
      {contents.isLoading ? (
        <div>
          <p>Loading</p>
        </div>
      ) : (
        <div className="faq-content">{contents.data.faq_content ? parser(contents.data.faq_content) : null}</div>
      )}
    </section>
  )
}

export default connect(mapStateToProps, null)(FAQContent)
