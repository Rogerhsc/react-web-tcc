import React, { Component, Form } from 'react'

export default class LoginScreen extends Component {
    render() {
        return (
            <div className="container">
                 <form>
                    <input
                        type="email"
                        placeholder="Endereço de e-mail"
                    />
                    <input
                        type="password"
                        placeholder="Insira sua senha"
                    />
                    <button 
                        type="submit">Entrar
                    </button>
                        <hr/>
                        {/* <Link to="/signup">Criar conta grátis</Link> */}
                    </form>
                
            </div>
        )
    }
}
