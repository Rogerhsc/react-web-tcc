import React, { Component } from 'react'
import './style.css'
import Header from './../header/index';
export default class Analitics extends Component {
  render() {
    return (
      <div className="container">
        <Header></Header>
        <div className="contentTituloAnalitics">
          <div className="title">
            <b>Analitics</b>
          </div>
          <div className="subTitle">
            <a>Você no controle da sua vida!!</a>
          </div>
        </div>
        <div className="buttonGrapsContent">
          <div className="buttonGraps">
            teste
          </div>
        </div>
      </div>
    )
  }
}
