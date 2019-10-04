import React, { Component } from "react";
import { Link,  } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons/";
import { useLastLocation } from 'react-router-last-location';
import "./style.css";

export default class ReturnHeader extends Component {
  render() {
    return (
      <div className={"containerHeader"}>
        <Link to={`${this.props.lastRoute}`}>
          <ArrowBack></ArrowBack>
        </Link>
      </div>
    );
  }
}
