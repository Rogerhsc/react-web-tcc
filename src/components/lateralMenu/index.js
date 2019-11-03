import React, { Component } from "react";
import "./style.css";
import {
  Close,
  BusinessCenter,
  AccountCircle,
  MonetizationOn,
  Widgets
} from "@material-ui/icons/";
import { Link } from "react-router-dom";

export default class LateralMenu extends Component {

  render() {
    return (
      <div className="containerMenu">
        <div className="menuIcon">
          <Link to={`${this.props.location.route}`}>
            <Close fontSize="large"></Close>
          </Link>
        </div>
        <div className="perfilImage">
          <img src={require("../../image/defaultImg.png")}></img>
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
        <div>
          <footer></footer>
        </div>
      </div>
    );
  }
}
