import React, { Component } from 'react'

import './style.css'
export default class ItensServico extends Component {
  render() {
    return (
      <div className="containerServicos">
        <div className="imgContent">
            <img src={require('../../image/defaultImg.png')}>
            </img>
        </div>
        <div className="txtContent">
            <b>{this.props.itenName}</b>
        </div>
      </div>
    )
  }
}
