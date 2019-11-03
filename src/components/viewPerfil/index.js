import React, { Component } from 'react'
import './style.css'
import Header from './../header/index';
import InputMask from 'react-input-mask';
export default class ViewPerfil extends Component {
  render() {
    return (
      <form>
        <div className="container">
          <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}/perfil`}></Header>
          <div className="perfilImage">
            <img src={require("../../image/defaultImg.png")}></img>
          </div>
          <div className="cadUser">
            <div className="rowLine">
              <div className="column">
                <input name="name" type="text" size="30" placeholder="Nome Completo" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <input name="cpf" type="email" size="30" placeholder="Email" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <input name="password" type="password" size="30" placeholder="Senha" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <label for="dtNasc">Data de Nascimento</label>
                <input name="dtNasc" type="date" size="30" placeholder="Data de Nascimento" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <label for="cel">Num Celular</label>
                <InputMask name="Celular" mask="(99) 99999-9999"></InputMask>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
