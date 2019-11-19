import React, { Component } from 'react'
import Header from '../header/index'
import ItensAnuncios from '../itensAnuncios/index'

export default class ViewMiServices extends Component {

    constructor(props){
        super(props)
        this.state = {
            worksList: []
        }
    }

    render() {
        return (
            <div className="container">
                <Header />
                <div className="contentTituloAnalitics">
                    <div className="title">
                        <b>Meus Serviços</b>
                    </div>
                    <div className="subTitle">
                        <a>Gerencie meus servços</a>
                    </div>
                </div>
                <div className="content">
                    <div className="filter">
                        <div className={`option-filter ${this.state.button1}`} onClick={() => this.filterList("button1")}>
                            <b>Nome</b>
                        </div>
                        <div className={`option-filter ${this.state.button2}`} onClick={() => this.filterList("button2")}>
                            <b>Valor</b>
                        </div>
                        <div className={`option-filter ${this.state.button3}`} onClick={() => this.filterList("button3")}>
                            <b>Avaliacao</b>
                        </div>
                        <div className={`option-filter ${this.state.button4}`} onClick={() => this.filterList("button4")}>
                            <b>Especialização</b>
                        </div>
                    </div>
                    <div className="rowContent">
                        {
                            this.state.worksList.length > 0
                                ?
                                this.state.worksList.map((v, i) => {
                                    return (
                                        <ItensAnuncios
                                            adInformation={this.adInformation(v.id)}
                                            key={i}
                                            image={
                                                v.user.file.length > 0
                                                    ?
                                                    v.user.file[0].path
                                                    :
                                                    null
                                            }
                                            userId={v.user_id}
                                            specialization={v.specialization}
                                            age={this.calcAge(v.user.birth_date)}
                                            user_name={v.user.name}
                                            price_type={v.price_type}
                                            price={v.price}
                                            categoria={this.props.match.params.categoria}
                                            anuncio={v.id}
                                        />
                                    )
                                })
                                :
                                <div className="warning--not_found">
                                    <h2>VOCÊ AINDA NÃO ANUNCIOU SEU SERVIÇO</h2>
                                </div>
                        }

                    </div>
                </div>
                <footer></footer>
            </div>
        )
    }
}
