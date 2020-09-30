import React from 'react';

import imgDeoxysNormal from '../assets/2019.09.09 - Deoxys Normal Forme.jpg';

const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={imgDeoxysNormal} alt="deoxys-normal" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">lorem21</p>
        <a href="#" className="btn btn-outline-success">go anywhere</a>
      </div>
    </div>
  )
}

export default Card