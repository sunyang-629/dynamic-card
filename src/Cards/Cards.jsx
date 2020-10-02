import React,{Component} from 'react';
import Card from './CardUI'

import imgDeoxysNormal from '../assets/2019.09.09 - Deoxys Normal Forme.jpg';
import imgDeoxysAttack from '../assets/2019.09.09 - Deoxys Attack Forme.jpg';
import imgDeoxysDefense from '../assets/2019.09.09 - Deoxys Defense Forme.jpg';

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4"><Card imgsrc={imgDeoxysNormal} title="normal"/></div>
          <div className="col-md-4"><Card imgsrc={imgDeoxysAttack} title="attack"/></div>
          <div className="col-md-4"><Card imgsrc={imgDeoxysDefense} title="defense"/></div>
        </div>
      </div>
    )
  }
}

export default Cards;