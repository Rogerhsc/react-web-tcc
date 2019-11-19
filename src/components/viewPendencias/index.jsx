import React, { Component } from 'react'
import Header from './../header/index';
import ItensAnuncios from '../itensAnuncios'

import { findWorks, findFile } from '../requests/request'

export default class ViewPendencias extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pending: [],
            solic: [],
            image: ""
        }
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        findWorks().then( res => {
            this.setState({
                pending: res.data.filter( v => {
                    return v.userworker.id = userId
                }),
                solic: res.data.filter( v => {
                    return v.usercontractor.id = userId
                })
            })
        });
    }

    calcAge(birthDate) {
        var data = birthDate.split("T")[0];
    
        var dd = data.split("-")[2];
        var mm = data.split("-")[1];
        var yyyy = data.split("-")[0];
    
        var dataInDate = new Date(`${yyyy},${mm},${dd}`);
        var timeDate = new Date() - dataInDate.getTime();
        var newDate = new Date(timeDate);
    
        return Math.abs(newDate.getUTCFullYear() - 1970);
      }

    handleFindFile (user_id) {
        findFile(user_id).then( res => {
            debugger;
        })
    }

    render() {
        return (
            <div className="container">
                <Header userId={`${this.props.match.params.userId}`} route={`${this.props.match.params.userId}/pendencias`}></Header>
                <div className="contentTituloAnalitics">
                    <div className="title">
                        <b>Pendencias</b>
                    </div>
                    <div className="subTitle">
                        <a>Gerencie suas pendencias e solicitações</a>
                    </div>
                </div>
                <div className="contentComponents">
                    <div className="txtLabel">
                        Pendencias
                    </div>
                    
                    <div className="buttonGrapsContent">
                        <div className="dataBox">
                            {
                                this.state.pending.map(( v, i ) => {
                                    return(
                                        <ItensAnuncios 
                                            key={i} 
                                            image={this.state.image}
                                            userId={v.userworker.id}
                                            specialization={v.service.specialization}
                                            age={this.calcAge(v.userworker.birth_date)}
                                            user_name={v.userworker.name}
                                            price_type={v.service.price_type}
                                            price={v.service.price}
                                            categoria={this.props.match.params.categoria} 
                                            anuncio={v.service.id} 
                                        />
                                    )
                                })
                            }
                            
                        </div>
                    </div>

                    <div className="txtLabel">
                        Solicitações
                    </div>

                    <div className="buttonGrapsContent">
                        <div className="dataBox">
                        {
                            this.state.solic.map(( v, i ) => {
                                return(
                                    <ItensAnuncios 
                                        key={i} 
                                        image={this.state.image}
                                        userId={v.userworker.id}
                                        specialization={v.service.specialization}
                                        age={this.calcAge(v.userworker.birth_date)}
                                        user_name={v.userworker.name}
                                        price_type={v.service.price_type}
                                        price={v.service.price}
                                        categoria={this.props.match.params.categoria} 
                                        anuncio={v.service.id} 
                                    />
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
