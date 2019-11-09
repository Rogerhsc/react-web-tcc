import React, { Component } from "react";
import Messages from "./messages/index";
import "./style.css";
import Header from "../header";

export default class Chat extends Component {
  render() {
    return (
      <div className="container">
        <Header
          userId={`${this.props.match.params.userId}`}
          route={`${this.props.match.params.userId}`}
        ></Header>
        <div className="contentMessages">
          <Messages user={"worker"} userId={1}></Messages>
          <Messages user={"not"} userId={1}></Messages>
          <Messages user={"worker"} userId={1}></Messages>
          <Messages user={"not"} userId={1}></Messages>
          <Messages user={"worker"} userId={1}></Messages>
        </div>
        <div className="send-messages">
          <textarea></textarea>
        </div>
      </div>
    );
  }
}
