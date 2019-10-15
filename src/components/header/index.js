import React, { Component } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import "./style.css";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerIcon">
          <Link
            to={{
              pathname: `/${this.props.userId}/menu`,
              route: `/${this.props.userId}`
            }}
          >
            <MenuIcon fontSize="large"></MenuIcon>
          </Link>
        </div>
      </div>
    );
  }
}
