import React, { Component, Form } from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { login } from '../requests/request'
import axios from 'axios';
import { url } from '../requests/url';

// import io from 'socket.io-client';
// const socket = io('http://localhost:3002');

// socket.on('connect', function(){});

// socket.on('newUser', (user) => console.log(user))


export default class LoginScreen extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            listusers: []
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        axios.get(`${url}/users`).then(response => {
            this.setState({
                listusers: response.data
            })
        })
        window.location.href = `/2`    
    }
    
    handleSubmit() {
        const logado = this.state.listusers.filter( v => {
            return ( v.email == this.state.email && v.password == this.state.password )
        })

        logado.length > 0
        ?
            setTimeout(() => {
                window.location.href = `/${logado.id}`    
            }, 1000)
        :
            alert("usuario ou senha incorretos");
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit}>
                <div className="container">
                    <div clxwassName="contentTituloAnalitics">
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
                            onChange={ e => this.setState({ email: e.target.value })}
                        />
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={ e => this.setState({ password: e.target.value })}
                        />
                        <div onClick={() => this.handleSubmit}>clique aqui</div>
                        <Link to="/signup/user">Criar conta grátis</Link>
                    </div>
                </div>
            </form>
        )
    }
}
