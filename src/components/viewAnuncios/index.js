import React, { Component } from 'react'
import ReturnHeader from '../returnHeader';
import { findServicesByType } from '../requests/request'

import './style.css'
import ItensAnuncios from './../itensAnuncios/index';
export default class ViewAnuncios extends Component {

  constructor(props){
    super(props);
    this.state = {
      worksList: [],
    }
  }

  componentDidMount(){
    findServicesByType(this.props.match.params).then(data => {
      this.setState({ worksList: data});
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

  adInformation(ad_id){
    return this.state.worksList.find( v => {
      return v.id === ad_id
    })
  }

  render() {
    return (
      <div className="container">
        <ReturnHeader lastRoute={`/${this.props.match.params.userId}`}></ReturnHeader>
        <div className="content">
          <div className="rowContent">
            {
              this.state.worksList.length > 0 
              ?
                this.state.worksList.map((v, i) => {
                return (
                  <ItensAnuncios 
                    adInformation={this.adInformation(v.id)}
                    key={i} 
                    image={v.user.file[0].path}
                    userId={v.user_id}
                    specialization={v.specialization}
                    age={this.calcAge(v.user.birth_date)}
                    user_name={v.user.name}
                    price_type={v.price_type}
                    price={v.price}
                    categoria={this.props.match.params.categoria} 
                    anuncio={v.id} 
                  />
                )})
              :
                  <div className="warning--not_found">
                    <h2>NÃO HÁ SERVIÇOS CADASTRADOS NA SUA REGIAO</h2>
                  </div>
          }
            
          </div>
        </div>
        <footer></footer>
      </div>
    )
  }
}
