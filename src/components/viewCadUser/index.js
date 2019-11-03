import React, { Component } from 'react'
import './style.css'
import ReturnHeader from '../returnHeader'
import InputMask from 'react-input-mask';
export default class ViewCadUser extends Component {
    render() {
        return (
            <form>
                <div className="container">
                    <ReturnHeader lastRoute="/"></ReturnHeader>
                    <div className="cadUser">
                        <div className="rowLine">
                            <div className="column">
                                <label for="foto">Foto do perfil</label>
                                <input name="foto" type="file" size="30" required></input>
                            </div>
                        </div>
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
                        <button type="submit" className="buttonSubmit">Realizar Cadastro</button>
                    </div>
                </div>
            </form>
        )
    }
}
