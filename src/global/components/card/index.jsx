import React from 'react'

import './index.scss'

const Card = ({ data, image }) => {
  return (
    <div className="card">
      <img src={image} alt="freshman" />

      {data.title ? <p className="card-title">{data.title}</p> : null}

      <div className="card-body">
        <div className="requirement">
          <p className="card-desc-title">Requirements:</p>
          <ul className="card-desc-detail">
            {data.requirements
              ? data.requirements.map((requirement, index) => {
                  return <li key={index}>{requirement}</li>
                })
              : null}
          </ul>
        </div>

        <div className="benefit">
          <p className="card-desc-title">Benefits:</p>
          <ul className="card-desc-detail">
            {data.benefits
              ? data.benefits.map((benefit, index) => {
                  return <li key={index}>{benefit}</li>
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card
