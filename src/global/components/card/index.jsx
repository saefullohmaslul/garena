import React from 'react'
import parser from 'html-react-parser'

import './index.scss'

const Card = ({ title, image, program }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />

      <p className="card-title">{title}</p>

      <div className="card-body">{program ? parser(program) : null}</div>
    </div>
  )
}

export default Card
