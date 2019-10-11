import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
export default class ItensAnuncios extends Component {

  render() {
    return (
      <div className="containerItensAnuncios">
        <Link to={`${this.props.categoria}/${this.props.anuncio}`}>
          <div className="itensAnunciosImg">
            <img src={require("../../image/defaultImg.png")}></img>
          </div>
          <div className="itensAnunciosTxt">
            <b>Nome do cidado</b><br />
            Especialidade: <br />
            Idade: <br />
            Valor: <br />
        </div>
        </Link>
      </div>
    )
  }
}
