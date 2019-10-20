import React, { Component } from 'react'
import Header from './../header/index';
import './style.css'
import SelectBox from '../selectBox';
export default class ViewCadAnuncio extends Component {
  render() {
    return (
      <div className="container">
        <Header userId={this.props.match.params.userId}></Header>
        <div className="contentLeft">
            <SelectBox options={["Mecanica", "Outros"]} label={"Categoria"}></SelectBox>
        </div>
        
      </div>
    )
  }
}
