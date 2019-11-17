import React, { Component } from 'react'
import Header from './../header/index';
import './style.css'
import Data from '../auxFiles/work.json'
import { createAd } from '../requests/request'
let work = Data.works;
export default class ViewCadAnuncio extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: parseInt(this.props.match.params.userId),
      type: "",
      specialization: "",
      price_type: "",
      price: 0.0,
      description: "",
      created_at: this.nowDate(),
      updated_at: "",
    }

    this.handleSubmitForm = this.handleSubmitForm.bind(this)
  }

  nowDate() {
    const data = new Date();

    const month = data.getMonth() + 1
    const year = month > 12 ? data.getFullYear() + 1 : data.getFullYear()

    return `${year}-${month > 12 ? 1 : month}-${data.getDate()}`;
  }

  handleSubmitForm() {
    createAd(this.state);
  }

  render() {
    return (
      <div className="container">
        <Header userId={this.props.match.params.userId}></Header>
        <div className="contentTituloAnalitics">
          <div className="title">
            <b>Anuncie</b>
          </div>
          <div className="subTitle">
            <a>Seja seu próprio patrão</a>
          </div>
        </div>
        <form onSubmit={this.handleSubmitForm}>
          <div className="rowLine">
            <div className="contentLeft">
              <label for="select">Tipo de serviço</label>
              <select id="select" onChange={e => this.setState({ type: e.target.value })} required>
                <option></option>
                {work.map((v, i) => {
                  return (
                    <option key={i}>
                      {v.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="esp">Especializado em?</label>
              <input id="esp" type="text" size="35" placeholder="Ex: Motor" onChange={ e => this.setState({ specialization : e.target.value })} required></input>
            </div>
          </div>
          <div className="rowLine">
            <div className="contentLeft">
              <label for="select">Tipo de Cobrança</label>
              <select id="select" onChange={ e => this.setState({ price_type : e.target.value })} required>
                <option></option>
                <option value="aEstimar">A combinar</option>
                <option value="pHora">Por Hora</option>
                <option value="fixo"> Fixo</option>
              </select>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="val">Valor</label>
              <input id="val" type="text" size="10" onChange={ e => this.setState({ price : parseFloat(e.target.value) })} ></input>
            </div>
          </div>
          <div className="rowLine">
            <div className="column">
              <label for="descAnuncio">Fale sobre o serviço</label>
              <textarea rows="5" cols="25" onChange={ e => this.setState({ description : e.target.value })}></textarea>
            </div>
          </div>
          <input type="submit" value="cadastrar" ></input>
        </form>
      </div>
    )
  }
}
