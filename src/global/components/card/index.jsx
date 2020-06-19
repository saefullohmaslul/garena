import React from 'react'
import parser from 'html-react-parser'

import './index.scss'

const Card = ({ data, image, program }) => {
  return (
    <div className="card">
      <img src={image} alt={data.title} />

      {data.title ? <p className="card-title">{data.title}</p> : null}

      <div className="card-body">{program ? parser(program) : null}</div>
    </div>
  )
}

export default Card
