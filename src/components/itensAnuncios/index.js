import React, { Component } from 'react'
import './style.css'
import { Link } from 'react-router-dom';import {
  SentimentSatisfied
} from "@material-ui/icons/";
export default class ItensAnuncios extends Component {

  render() {
    const classNormal = `align-icon_text ${this.props.className}`
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
          <div className="icons_notification">
              { 
                this.props.pending 
                ?
                  <div className={ classNormal }>
                    {this.props.icon}
                  </div>
                :
                  null
              }
          </div>
        </Link>
      </div>
    )
  }
}
