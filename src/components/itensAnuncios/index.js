import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
export default class ItensAnuncios extends Component {

  render() {
    return (
      <div className="containerItensAnuncios">
        <Link to={{
          pathname: `${this.props.categoria}/${this.props.anuncio}`,
        }} >
          <div className="itensAnunciosImg">
            <img src={this.props.image}></img>
          </div>
          <div className="itensAnunciosTxt">
            <b>{this.props.user_name}</b><br />
            Especialidade: {this.props.specialization}<br />
            Idade: {this.props.age}<br />
            Tipo Cobranca: {this.props.price_type}<br />
            Valor: {this.props.price}<br />
          </div>
        </Link>
      </div>
    )
  }
}
