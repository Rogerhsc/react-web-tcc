import React, { Component } from "react";
import Messages from "./messages/index";
import "./style.css";
import ReturnHeader from '../returnHeader';
import { CheckCircle, NotInterested } from '@material-ui/icons';

import auxMessage from '../auxFiles/messages.json'

export default class Chat extends Component {
  constructor(props){
    super(props)
    this.state = {
      sendMessage: false,
      message: "",
      messages: auxMessage.messages
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  handleChangeText(e) {
    if(e.target.value.length > 0){
      this.setState(
        {
          sendMessage: true,
          message: e.target.value
        }
      )
    }else {
      this.setState(
        {
          sendMessage: false,
          message: e.target.value
        }
      )
    }
  }

  sendMessage() {
    var contentMessage = document.getElementsByClassName('contentMessages')[0];

    var messages = this.state.messages;
    var objectMessage = {
      "id": this.props.match.params.userId,
      "type": "none",
      "anuncio": "363",
      "message": this.state.message
    }

    messages.push(objectMessage);

    this.setState({
      messages: messages,
      message: "",
      sendMessage: false
    }) 
    setTimeout(() => {
      contentMessage.scrollTo(0, contentMessage.scrollHeight);
    }, 100)
    
  }
  
  render() {
    return (
      <div className="container">
        <ReturnHeader lastRoute={`/${this.props.match.params.userId}/servicos/${this.props.match.params.categoria}/${this.props.match.params.perfil}`}></ReturnHeader>
        <div className="contentMessages">
        {
          this.state.messages.map((v , i) => {
            return(
              <Messages key={i} user={v.type} userId={v.id} mensagem={v.message}></Messages>
            )
          })
        }
        </div>
        <div className="send-messages">
          <textarea onChange={this.handleChangeText} id="messageBox" value={this.state.message}></textarea>
          {
            this.state.sendMessage 
            ? 
              <CheckCircle onClick={this.sendMessage}></CheckCircle>
            :
              <NotInterested id="notInteress"></NotInterested>
          }
          
        </div>
      </div>
    );
  }
}
