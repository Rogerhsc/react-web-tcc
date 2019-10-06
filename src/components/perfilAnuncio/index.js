import React, { Component } from 'react'
import './style.css'
import ReturnHeader from './../returnHeader/index';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { GroupAdd, AttachMoney, Chat, HowToReg } from '@material-ui/icons';

export default class PerfilAnuncio extends Component {
  render() {
    return (
      <div className="containerMenu">
        <ReturnHeader lastRoute={`/servicos/${this.props.match.params.categoria}`}></ReturnHeader>
        <div className="perfilAvaliacao">
          <div className="perfilStars">
            <Typography component="legend">Avaliação</Typography>
            <Rating value={5} readOnly ></Rating>
          </div>
          <div className="perfilQtdServicos">
            <Typography component="legend">Serviços Realizados</Typography>
            <div className="txtQtdServicos">
              <GroupAdd></GroupAdd><b>55</b>
            </div>
          </div>
        </div>
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
            Serviços Realizados
        </b></p>
        </div>
        <div className="perfilAnuncioRealizado">
          <Link>
            <img src={require("../../image/defaultImg.png")} />
          </Link>
        </div>
        <div className="perfilAvaliacao">
          <div className="txtTipoServico">
            <b>Tipo Servico</b>
            Comprança Por Hora
          </div>
          <div className="txtValorServico">
            <AttachMoney fontSize="large"></AttachMoney><b>120,00</b>
          </div>
        </div>
        <div className="buttonsGroup-one">
          <div className="customButtom-one">
            <b>Negociar</b>
            <Chat fontSize="large"></Chat>
          </div>
          <div className="customButtom-two">
            <b>Contratar</b>
            <HowToReg fontSize="large"></HowToReg>
          </div>
        </div>
        <footer></footer>
      </div>
    )
  }
}
