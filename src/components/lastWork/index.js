import React, { Component } from 'react'
import ReturnHeader from '../returnHeader';

export default class WorkComent extends Component {
    componentDidMount(){
        debugger;
    }
  render() {
    return (
      <div className="container">
        <ReturnHeader lastRoute={`/${this.props.match.params.userId}/servicos/${this.props.match.params.categoria}/${this.props.match.params.perfil}`}></ReturnHeader>
      </div>
    )
  }
}
