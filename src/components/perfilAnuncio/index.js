import React, { Component } from 'react'
import './style.css'
import ReturnHeader from './../returnHeader/index';
import { Scrollbars } from 'react-custom-scrollbars';
export default class PerfilAnuncio extends Component {
  render() {
    return (
      <div className="containerMenu">
        <ReturnHeader lastRoute={`/servicos/${this.props.match.params.categoria}`}></ReturnHeader>
        <div className="perfilImage">
          <img src={require("../../image/defaultImg.png")}></img>
        </div>
        <div className="perfilAnuncioTxtNome">
          <p><b>
            Nome do Cidadao<br />
            21 Anos
        </b></p>
        </div>
        <div className="perfilAnuncioDesc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div className="perfilAnuncioTxtNome">
          <p><b>
            Servicos Realizados
        </b></p>
        </div>
        <div className="perfilAnuncioRealizado">
          <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
            <img src={require("../../image/defaultImg.png")} />
        </div>
      </div>
    )
  }
}
