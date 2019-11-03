import React, { Component } from 'react'
import './style.css'
import Header from './../header/index';
import ButtonGraph from '../buttonGraph';
import Graph from '../graph';
export default class Analitics extends Component {
  render() {
    return (
      <div className="container">
        <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}/analitcs`}></Header>
        <div className="contentTituloAnalitics">
          <div className="title">
            <b>Analitics</b>
          </div>
          <div className="subTitle">
            <a>Você no controle da sua vida!!</a>
          </div>
        </div>
        <div className="contentComponents">
          <div className="buttonGrapsContent">
            <div className="buttonGraps">
              <Graph></Graph>
            </div>
          </div>

          <div className="txtLabel">
            Recebimentos Mensais
          </div>

          <div className="buttonGrapsContent">
            <div className="dataBox">
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
            </div>
          </div>

          <div className="txtLabel">
            Serviços Prestados
          </div>

          <div className="buttonGrapsContent">
            <div className="dataBox">
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
              <ButtonGraph label={"Mecanica"} val={"500"}></ButtonGraph>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>

    )
  }
}
