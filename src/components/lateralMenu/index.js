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
  componentDidMount() {}

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
        <Link to={`/analitcs/${1}`}>
          <div className="menuItem">
            <b>Analitics</b>
            <BusinessCenter fontSize="large"></BusinessCenter>
          </div>
        </Link>

        <Link to={"/"}>
          <div className="menuItem" >
            <b>Serviços</b>
            <Widgets fontSize="large"></Widgets>
          </div>
        </Link>

        <Link>
          <div className="menuItem">
            <b>Perfil</b>
            <AccountCircle fontSize="large"></AccountCircle>
          </div>
        </Link>

        <Link>
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
