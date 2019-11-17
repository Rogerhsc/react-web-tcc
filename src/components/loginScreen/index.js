import React, { Component, Form } from 'react'
import './style.css';
import { Link } from 'react-router-dom';

// import io from 'socket.io-client';
// const socket = io('http://localhost:3002');

// socket.on('connect', function(){});

// socket.on('newUser', (user) => console.log(user))


export default class LoginScreen extends Component {
    render() {
        return (

            <form>
                <div className="container">
                    <div className="contentTituloAnalitics">
                        <div className="title">
                            <b>Facilita!</b>
                        </div>
                        <div className="subTitle">
                            <a>Serviços Autonomos</a>
                        </div>
                    </div>
                    <div className="contentOrange">
                        <input
                            type="email"
                            placeholder="Endereço de e-mail"
                        />
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                        />
                        <button
                            type="submit" className="">Entrar
                        </button>
                        <Link to="/signup/user">Criar conta grátis</Link>
                    </div>
                </div>
            </form>
        )
    }
}
