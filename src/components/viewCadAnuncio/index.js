import React, { Component } from 'react'
import Header from './../header/index';
import './style.css'
import Data from '../auxFiles/work.json'

let work = Data.works;
export default class ViewCadAnuncio extends Component {
  render() {
    return (
      <div className="container">
        <Header userId={this.props.match.params.userId}></Header>
        <div className="contentTituloAnalitics">
          <div className="title">
            <b>Anuncie</b>
          </div>
          <div className="subTitle">
            <a>Seja seu próprio patrão</a>
          </div>
        </div>
        <form>
          <div className="rowLine">
            <div className="contentLeft">
              <label for="select">Tipo de serviço</label>
              <select id="select" >
                {work.map((v, i) => {
                  return (
                    <option key={i}>
                      {v.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="esp">Especializado em?</label>
              <input id="esp" type="text" size="35" placeholder="Ex: Motor"></input>
            </div>
          </div>
          <div className="rowLine">
            <div className="contentLeft">
              <label for="select">Tipo de Cobrança</label>
              <select id="select" >
                <option></option>
                <option value="pHora">Por Hora</option>
                <option value="fixo"> Fixo</option>
              </select>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="val">Valor</label>
              <input id="val" type="text" size="10" ></input>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="descAnuncio">Fale sobre o serivço</label>
              <textarea rows="5" cols="25"></textarea>
            </div>
          </div>
          <input type="submit" value="cadastrar"></input>
        </form>
      </div>
    )
  }
}
