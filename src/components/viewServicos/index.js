import React, { Component } from "react";

import "./style.css";

import Data from "../auxFiles/work.json";
import Header from "./../header/index";
import ItensServico from "./../itensServicos/index";
import { Search } from "@material-ui/icons";

let works = Data.works;

export default class ViewServicos extends Component {

  render() {
    return (
      <div className="container">
        <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}`}></Header>
        <div className="content">
          <div className="inputWithIcon">
            <input type="text" id="inputSearch"></input>
            <div className="buttonIcon">
            <Search></Search>
            </div>
          </div>

          <div className="rowContent">
            {works.map((v, i) => {
              return (
                <ItensServico
                  key={i}
                  itenName={v.name}
                  itenImg={v.img}
                  route={v.name}
                  userId={this.props.match.params.userId}
                ></ItensServico>
              );
            })}
          </div>
        </div>
        <footer></footer>
      </div>
    );
  }
}
