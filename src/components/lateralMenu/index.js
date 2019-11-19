import React, { Component } from "react";
import "./style.css";
import {
  Close,
  BusinessCenter,
  AccountCircle,
  MonetizationOn,
  Widgets,
  ExitToApp,
  AssignmentLate
} from "@material-ui/icons/";
import { Link } from "react-router-dom";
import { findUserById } from '../requests/request'

export default class LateralMenu extends Component {
  constructor(props){
    super(props)
    this.state = {
      image: "",
    }
  }

  componentDidMount(){
    findUserById(parseInt(this.props.match.params.userId)).then(data => {
      this.setState({
        image: data.file[0].path,
      })
    });    
  }

  render() {
    return (
      <div className="containerMenu">
        <div className="menuIcon">
          <Link to={`${this.props.location.route}`}>
            <Close fontSize="large"></Close>
          </Link>
        </div>
        <div className="perfilImage">
          <img src={this.state.image}></img>
        </div>
        <Link to={`analitcs`}>
          <div className="menuItem">
            <b>Analitics</b>
            <BusinessCenter fontSize="large"></BusinessCenter>
          </div>
        </Link>

        <Link to={`/${this.props.match.params.userId}`}>
          <div className="menuItem" >
            <b>Serviços</b>
            <Widgets fontSize="large"></Widgets>
          </div>
        </Link>

        <Link to={`perfil`}>
          <div className="menuItem">
            <b>Perfil</b>
            <AccountCircle fontSize="large"></AccountCircle>
          </div>
        </Link>

        <Link to={`anuncio`}>
          <div className="menuItem">
            <b>Anunciar</b>
            <MonetizationOn fontSize="large"></MonetizationOn>
          </div>
        </Link>

        <Link to={`pendencias`}>
          <div className="menuItem">
            <b>Minhas Pendencias</b>
            <AssignmentLate fontSize="large"></AssignmentLate>
          </div>
        </Link>

        <Link to={`miServices`}>
          <div className="menuItem">
            <b>Meu Serviços</b>
            <AssignmentLate fontSize="large"></AssignmentLate>
          </div>
        </Link>

        <Link to={`/`}>
          <div className="menuItem">
            <b>Sair</b>
            <ExitToApp fontSize="large"></ExitToApp>
          </div>
        </Link>
        <div>
          <footer></footer>
        </div>
      </div>
    );
  }
}
