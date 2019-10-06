import React, { Component } from 'react'
import ReturnHeader from '../returnHeader';
import './style.css'
import ItensAnuncios from './../itensAnuncios/index';
export default class ViewAnuncios extends Component {
  render() {
    return (
      <div className="container">
        <ReturnHeader lastRoute={"/"}></ReturnHeader>
        <div className="content">
          <div className="rowContent">
            <ItensAnuncios categoria={this.props.match.params.categoria} anuncio={"10"}></ItensAnuncios>
          </div>
        </div>
        <footer></footer>
      </div>
    )
  }
}
