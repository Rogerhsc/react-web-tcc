import React, { Component } from 'react'
import ReturnHeader from '../returnHeader';
import './style.css'
import ItensAnuncios from './../itensAnuncios/index';
export default class ViewAnuncios extends Component {
  render() {
    return (
      <div className="container">
        <ReturnHeader lastRoute={`/${this.props.match.params.userId}`}></ReturnHeader>
        <div className="content">
          <div className="rowContent">
            <ItensAnuncios userId={this.props.match.params.userId} categoria={this.props.match.params.categoria} anuncio={"10"}></ItensAnuncios>
          </div>
        </div>
        <footer></footer>
      </div>
    )
  }
}
