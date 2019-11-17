import React, { Component } from 'react'
import './style.css'
import Header from './../header/index';
import InputMask from 'react-input-mask';
import { findUserById } from '../requests/request'

export default class ViewPerfil extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: "",
      name: "",
      email: "",
      senha: "",
      birth_date: "",
      fone: ""
    }
  }
  
  componentDidMount(){
    findUserById(parseInt(this.props.match.params.userId)).then(data => {
      this.setState({
        image: data.file[0].path,
        name: data.name,
        email: data.email,
        senha: data.password,
        birth_date: data.birth_date,
        fone: data.phone,
      })
    });
  }

  render() {
    const { image, name, email, senha, birth_date, fone} = this.state
    return (
      <form>
        <div className="container">
          <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}/perfil`}></Header>
          <div className="perfilImage">
            <img src={image}></img>
          </div>
          <div className="cadUser">
            <div className="rowLine">
              <div className="column">
                <input name="name" type="text" size="30" value={name} placeholder="Nome Completo" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <input name="cpf" type="email" size="30" placeholder="Email" value={email} required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <input name="password" type="password" size="30" value={senha} placeholder="Senha" required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <label for="dtNasc">Data de Nascimento</label>
                <input name="dtNasc" type="date" size="30" placeholder="Data de Nascimento" value={birth_date.split("T")[0]} required></input>
              </div>
            </div>
            <div className="rowLine">
              <div className="column">
                <label for="cel">Num Celular</label>
                <InputMask name="Celular" mask="(99) 99999-9999" value={fone} ></InputMask>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
