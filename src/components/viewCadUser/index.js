import React, { Component } from 'react'
import './style.css'
import ReturnHeader from '../returnHeader'
import InputMask from 'react-input-mask';

import { createUser } from '../requests/request'

export default class ViewCadUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            password: '',
            email: '',
            birthDate: '',
            fone: '',
            cep: '',
        }
        this.sendData = this.sendData.bind(this);
    }

    sendData(){
        const {name, email, password, birthDate, fone} = this.state;
        debugger;
        createUser(name, email, password, fone, birthDate);
    }
    render() {
        return (
            <form method="post">
                <div className="container">
                    <ReturnHeader lastRoute="/"></ReturnHeader>
                    <div className="cadUser">
                        <div className="rowLine">
                            <div className="column">
                                <label for="foto">Foto do perfil</label>
                                <input name="foto" type="file" size="30" ></input>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <input name="name" type="text" size="30" placeholder="Nome Completo" onChange={ e => this.setState({ name: e.target.value }) } required></input>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <input name="cpf" type="email" size="30" placeholder="Email" onChange={ e => this.setState({ email: e.target.value }) } required></input>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <input name="password" type="password" size="30" placeholder="Senha" onChange={ e => this.setState({ password: e.target.value }) } required></input>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <label for="cep">CEP</label>
                                <InputMask name="cep" mask="999999-999" onChange={ e => this.setState({ fone: e.target.value }) }></InputMask>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <label for="dtNasc">Data de Nascimento</label>
                                <input name="dtNasc" type="date" size="30" placeholder="Data de Nascimento" onChange={ e => this.setState({ birthDate: e.target.value }) } required></input>
                            </div>
                        </div>
                        <div className="rowLine">
                            <div className="column">
                                <label for="cel">Num Celular</label>
                                <InputMask name="Celular" mask="(99) 99999-9999" onChange={ e => this.setState({ fone: e.target.value }) }></InputMask>
                            </div>
                        </div>
                        <button type="submit" className="buttonSubmit" onClick={this.sendData}>Realizar Cadastro</button>
                    </div>
                </div>
            </form>
        )
    }
}
